import { useState } from 'react'
import { LearnSection } from '@/components'

export default function App() {
  console.log('App 렌더링')

  const [isVisible, setIsVisible] = useState(true)
  const handleInput = (e) => setIsVisible(e.target.checked)

  const [inputValue, setInputValue] = useState('Child 컴포넌트')
  const [headline, setHeadline] = useState('사자 보이즈')
  const updateHeadline = () => setHeadline((h) => h + '🦁')

  return (
    <LearnSection
      className="p-10"
      title="컴포넌트 라이프사이클(생명주기: 탄생(mount) -> 성장(update) -> 죽음(unmount))"
    >
      <label className="flex gap-1 items-center">
        <input
          type="checkbox"
          name="is-visible"
          checked={isVisible}
          onChange={handleInput}
        />
        Child 컴포넌트 표시 ({isVisible.toString()})
      </label>
      {isVisible ? (
        <Child
          headline={headline}
          updateHeadline={updateHeadline}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : null}
    </LearnSection>
  )
}

// 컴포넌트 라이프사이클
// 1. 생성(mount)
// 2. 변경(update) x N
// 0. 소멸(unmount)
function Child({ headline, updateHeadline, inputValue, setInputValue }) {
  console.log('Child 렌더링')

  return (
    <article className="mt-5 p-5 border-2 border-inherit">
      <h2 className="text-xl font-extrabold mb-2">{headline}</h2>
      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" className="button mt-2" onClick={updateHeadline}>
        사자 이모지 추가
      </button>
    </article>
  )
}
