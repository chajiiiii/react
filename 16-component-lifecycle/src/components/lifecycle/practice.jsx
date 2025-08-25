import { Component } from 'react'

export default class Practice extends Component {
  // constructor(props) {
  //   super(props)
  // }

  // 상태 선언
  state = {
    headline: 'Practice 컴포넌트',
  }
  render() {
    // 렌더링 추적 : 컴포넌트가 리렌더링될 때마다 "렌더링" 출력
    console.log('Practice 렌더링')

    return (
      <section className="border-2 bg-indigo-600 text-white p-5 m-5">
        <h2>{this.state.headline}</h2>
        <button
          type="button"
          className="button mt-2"
          onClick={() =>
            this.setState({ headline: this.state.headline + '👏' })
          }
        >
          👏
        </button>
      </section>
    )
  }

  // 클래스 필드에 메서드 정의 (인스턴스 메서드: 다른 메서드에서 접근 가능)
  handleClick = () => {
    console.log('문서 클릭')
  }

  // 마운트 감지 : 컴포넌트가 마운트될 때 "마운트" 출력
  componentDidMount() {
    console.log('Practice 마운트 됨')

    console.log('문서 클릭 이벤트 연결 또는 (채팅) 구독')
    document.addEventListener('click', this.handleClick)
  }

  // 상태 업데이트 감지 : 상태가 변경될 때마다 "변경된 상태 값" 출력
  componentDidUpdate(_, prevState) {
    console.log('변경되기 전 healdine 상태 값', prevState.headline)
    console.log('변경된 healdine 상태 값', this.state.headline)

    // 문서 제목 업데이트 : 상태가 변경될 때마다 문서의 제목 값을 동적으로 변경
    // 리액트가 할 수 없는 일을 여기에 작성
    document.title = this.state.headline
  }

  // 라이프사이클 클린업 : 설정된 이벤트 리스닝 또는 타이머 등 정리(cleanup)
  componentWillUnmount() {
    console.log('연결 또는 (채팅) 구독된 모든 이벤트 리스너 클린업(정리)')
    document.removeEventListener('click', this.handleClick)
  }
}

// 상태 업데이트 감지 설명해주실때,
// pratice 컴포넌트 상태가 변경되어도
// 부모 컴포넌트(App)에는 영향을 미치지않고
// practice 컴포넌트 내에서만 상태 업데이트가
// 이루어지는 부분 한 번더 내용 설명부탁드려도 될까요?

// - 부모 렌더링 -> 자식도 덩달아 렌더링 ✅
// - 자식 렌더링 -> 부모도 다시 렌더링 될까?? ❌
