import { LearnSection } from '@/components'
import Counter from './couter'
import PrintCount from './print-count'

export default function LiftingStateUpDemo() {
  return (
    <LearnSection title="상태 끌어올리기">
      <Counter />
      <PrintCount />
    </LearnSection>
  )
}
