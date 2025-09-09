import { LearnSection } from '@/components'
import RandomCountUp from './demo'
import ErrorBoundary from './error-boundar'

export default function App() {
  // throw new Error('App 에러 발생')

  return (
    <LearnSection title="랜덤 카운트 업" className="p-10">
      <ErrorBoundary>
        <RandomCountUp />
      </ErrorBoundary>
    </LearnSection>
  )
}
