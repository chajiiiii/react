import { type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

export default function AlertPortal({
  message,
  children,
}: PropsWithChildren<{
  message?: string
}>) {
  if (typeof document === 'undefined') return null

  const alertPortal = document.getElementById('alert-portal')
  if (!alertPortal) return null

  return createPortal(
    <div className="p-6 border-5 border-indigo-600 text-indigo-700 font-semibold">
      {children} ({message})
    </div>,
    alertPortal
  )
}
