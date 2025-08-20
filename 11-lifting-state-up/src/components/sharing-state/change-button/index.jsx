import { useState } from 'react'
import emotions from '@/data/emotions.json'
import './style.css'

export default function ChangeButton() {
  const [randomIndex, setRandomIndex] = useState(
    getRandomIndex(emotions.length)
  )

  const handleClick = () => {
    setRandomIndex(getRandomIndex(emotions.length))
  }

  return (
    <button type="button" className="change-button" onClick={handleClick}>
      {emotions[randomIndex].message}
    </button>
  )
}

function getRandomIndex(limit) {
  return Math.floor(Math.random() * limit)
}
