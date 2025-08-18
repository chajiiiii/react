import './style.css'

/**
 * Demo 컴포넌트
 * @param {Object} props
 * @param {React.ReactNode} props.children - 리액트 노드
 */
export default function Demo({ children }) {
  return <div className="demo">{children}</div>
}
