import { LearnSection } from '@/components'
import StatefulComponentClass from './components/stateful-component/class'
import StatefulComponent from './components/stateful-component/functional'

export default function App() {
  return (
    <LearnSection title="상태가 있는 컴포넌트" showTitle>
      {/* React.createElement(StatefulComponentClass) */}
      <StatefulComponentClass
        aria-describedby="component-description"
        data-component-type="class"
        className="mx-auto"
        style={{ display: 'grid' }}
      />
      <p id="component-description">
        클래스 컴포넌트는 React의 전통적인 방식으로, 내부 상태(state)를 관리하고
        라이프사이클 메서드를 사용할 수 있습니다. 'setState()' 메서드를 통해
        상태를 업데이트하며, 'render()' 메서드로 UI를 반환합니다. 함수형
        컴포넌트와 Hook이 도입된 이후에는 사용 빈도가 줄었지만, 여전히 많은
        프로젝트에서 사용되고 있습니다.
      </p>

      <StatefulComponent
        aria-describedby="functional-component-description"
        data-component-type="class"
        className="mx-auto"
        style={{ display: 'grid' }}
      />
      <p id="functional-component-description">
        함수형 컴포넌트는 React의 현대적인 접근 방식으로, Hook을 통해 상태
        관리와 생명주기 기능을 사용합니다. 'useState()' Hook으로 상태를 선언하고
        업데이트하며, 'useEffect()'로 생명주기 관련 작업을 처리합니다. 클래스
        컴포넌트보다 코드가 간결하고 가독성이 높으며, 컴포넌트 간 로직 재사용이
        용이하여 현재 React 개발의 표준 방식으로 자리잡았습니다.
      </p>
    </LearnSection>
  )
}
