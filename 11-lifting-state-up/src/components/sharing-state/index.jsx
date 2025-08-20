import LearnSection from '../learn-section'
import ChangeButton from './change-button'
import { EmotionFigure } from './emotions'

export default function SharingState() {
  return (
    <LearnSection title="다른 컴포넌트와 상태 공유하기">
      <EmotionFigure />
      <ChangeButton />
    </LearnSection>
  )
}
