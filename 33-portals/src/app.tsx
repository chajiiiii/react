import { Info } from 'lucide-react'
import { AlertPortal, LearnSection } from '@/components'

export default function App() {
  return (
    <LearnSection title="리액트의 포털(차원 이동)" showTitle className="p-10">
      <AlertPortal>
        <p className="flex gap-1">
          <Info /> 포털을 사용해 컴포넌트 렌더링
        </p>
      </AlertPortal>
    </LearnSection>
  )
}
