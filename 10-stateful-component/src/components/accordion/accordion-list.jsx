import accordionData from './data.json'
import { Component } from 'react'
import AccordionItem from './accordion-item'

// 클래스 컴포넌트
export default class AccordionList extends Component {
  // 상태 선언
  // 클래스 필드 구문 활용
  state = {
    activeIndex: 0,
  }

  // 이벤트 핸들러
  handleActiveIndex = (nextActiveIndex) => {
    // 상태 업데이트
    this.setState(
      {
        activeIndex: nextActiveIndex,
      },
      () => {
        console.log(this.state.activeIndex)
      }
    )
  }

  render() {
    const { activeIndex } = this.state

    return (
      <section>
        <h2>
          자주 묻는 질문
          <img
            src="/assets/tutor@2x.png"
            alt="피그마 튜터"
            width={43}
            height={43}
          />
        </h2>
        <dl>
          {accordionData.map((accordionItem, index) => (
            <AccordionItem
              key={accordionItem.id}
              question={accordionItem.question}
              answer={accordionItem.answer}
              isOpen={activeIndex === index}
              index={index}
              onActive={this.handleActiveIndex}
            />
          ))}
        </dl>
      </section>
    )
  }
}