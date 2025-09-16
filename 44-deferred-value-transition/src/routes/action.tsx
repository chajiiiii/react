import { createFileRoute } from '@tanstack/react-router'
import { UsingAction, UsingActionState } from '@/features/action-state'

function Page() {
  return (
    <>
      <UsingAction />
      <UsingActionState />
      {/* <OptimisticUI /> */}
    </>
  )
}

export const Route = createFileRoute('/action')({
  component: Page,
})
