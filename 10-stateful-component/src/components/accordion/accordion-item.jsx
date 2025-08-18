import './accordion-item.css'

/**
 * AccordionItem 컴포넌트
 * @param {Object} props
 * @param {number} props.index - 질문/답변의 인덱스
 * @param {string} props.question - 자주 묻는 질문
 * @param {string} props.answer - 답변
 * @param {boolean} props.isOpen - 아코디언 아이템 열림/닫힘 여부
 * @param {(nextActiveIndex: number) => void} props.onActive - 아코디언 아이템 열리도록 설정하는 기능
 */
export default function AccordionItem({
  index,
  question,
  answer,
  isOpen = false,
  onActive,
}) {
  const buttonLabel = isOpen ? '닫힘' : '열림'

  return (
    <div className="accordion-item">
      <dt>
        {question}{' '}
        <button type="button" onClick={() => onActive?.(index)}>
          {buttonLabel}
        </button>
      </dt>
      <dd hidden={!isOpen}>{answer}</dd>
    </div>
  )
}