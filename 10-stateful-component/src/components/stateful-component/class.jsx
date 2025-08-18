import { Component } from 'react'

export default class StatefulComponentClass extends Component {
  // constructor(props) {
  //   super(props)

  //   // 컴포넌트 상태(로컬 데이터) 선언
  //   // 읽기/쓰기 모두 가능
  //   // 상태가 변경되면 리액트 리렌더링(다시 그림)
  //   this.state = {
  //     count: 9,
  //   }
  // }

  // this.state
  state = {
    count: 9,
    name: '상태 설정이 가능한 클래스 컴포넌트',
  }

  // 클래스 필드
  // 인스턴스 멤버
  name = 'StatefulComponentClass'

  // 컴포넌트 렌더링과 별개로 클래스 필드 내부에 데이터 값 기억하는 것이 가능
  prevCount = this.state.count

  // 클래스 컴포넌트로부터 인스턴스 생성 이후
  // 렌더링 될 때마다 render() 메서드가 실행됨
  render() {
    // 읽기 전용인 컴포너트 속성(외부에서 전달된 데이터)
    // console.log(this.props)
    const { className, style, ...restProps } = this.props

    const { name, count } = this.state

    const handleUpdateName = () => {
      // console.log(this)

      // 직접 상태 값 수정 ❌
      // 리액트가 업데이트 하지 않습니다.
      // this.state.name = '컴포넌트 상태가 업데이트 되었습니다!'

      // 허용된 방법을 사용해 상태 값 수정 ✅
      // this.setState(updater[,callback])
      // 리액트의 상태 업데이트는 비동기 (즉시 처리 안함, 나중에 처리함)
      this.setState(
        {
          name: '컴포넌트 상태가 업데이트 되었습니다!',
        },
        () => {
          // 상태 업데이트가 완료되었음을 보장
          console.log('callback = ', this.state.name) // '컴포넌트 상태가 업데이트 되었습니다!'
        }
      )

      console.log('handler = ', this.state.name) // '상태 설정이 가능한 클래스 컴포넌트'
    }

    const handleUpdateCount = () => {
      this.setState(
        {
          count: this.state.count + 1,
        },
        () => {
          console.log('count 업데이트 후: ', this.state.count)
        }
      )

      console.log('count 업데이트 전: ', this.state.count)
      this.prevCount = this.state.count
    }

    console.log('클래스 컴포넌트 렌더링')

    return (
      <article className={className} style={style} {...restProps}>
        <h2>상태가 있는 컴포넌트 (클래스 타입)</h2>
        <p>{name}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginBlockEnd: 20,
          }}
        >
          <output>이전 카운트 값: {this.prevCount}</output>
          <output>업데이트된 카운트 값: {count}</output>
        </div>
        <div role="group">
          <button type="button" onClick={handleUpdateName}>
            이름 수정
          </button>
          <button type="button" onClick={handleUpdateCount}>
            카운트 수정
          </button>
        </div>
      </article>
    )
  }
}
