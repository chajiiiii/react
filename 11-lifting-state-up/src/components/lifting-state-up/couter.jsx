import { useState } from 'react'
import './counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((c) => c + 1)}
    >
      {count}
    </button>
  )
}
