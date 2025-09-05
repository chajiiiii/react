import { useCallback, useEffect, useState } from 'react'

const init = <Type>(storageKey: string, storageVaue: Type) => {
  const value = globalThis.localStorage.getItem(storageKey)
  if (!value) return storageVaue
  const parsedValue = JSON.parse(value)
  return parsedValue as Type
}

export default function usePersist<V>(storageKey: string, storageVaue: V) {
  const [value, setValue] = useState<V>(init<V>(storageKey, storageVaue))

  const remove = useCallback(() => {
    globalThis.localStorage.removeItem(storageKey)
    setValue('' as V)
  }, [storageKey])

  useEffect(() => {
    if (value) {
      globalThis.localStorage.setItem(storageKey, JSON.stringify(value))
    }
  }, [storageKey, value])

  return [value, setValue, { remove }] as const
}
