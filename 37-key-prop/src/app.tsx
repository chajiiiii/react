import { useState } from 'react'
import { Counter } from '@/components'
import RandomCountUp from './demo'

export default function App() {
  const [isA, setIsA] = useState(true)

  return (
    <>
      <div className="m-10 flex flex-col gap-2 items-center">
        <button
          type="button"
          className="cursor-pointer py-1.5 px-3.5 bg-stone-950 text-white rounded font-black"
          onClick={() => setIsA((a) => !a)}
        >
          {isA ? 'A' : 'Z'}
        </button>
        {isA ? <Counter key="A" /> : <Counter key="Z" />}
      </div>
      <RandomCountUp />
    </>
  )
}
