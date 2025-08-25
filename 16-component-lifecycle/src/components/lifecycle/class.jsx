import { Component } from 'react'

export default class LifeCycleDemo extends Component {
  // 마운트 시점 ---------------------------------------------------

  // 렌더 단계 (리액트 DOM)

  // 생성 시점에 실행되는 메서드(함수)
  // - 컴포넌트 인스턴스 생성 과정에서 처음 1회만 실행
  constructor(props) {
    // console.log({ props })

    // React.Component 수퍼 클래스에 props 전달
    // this.props 사용 가능
    super(props)

    // 상태 선언
    this.state = {
      count: 0,
    }

    // console.log({ state: this.state })

    console.log('constructor', document.querySelector('.lifecycle-demo'))
  }

  // 렌더 시점에 실행되는 메서드(함수)
  // - 컴포넌트 렌더링, 리렌더링 과정에서 여러 번 실행
  render() {
    console.log('render', document.querySelector('.lifecycle-demo'))

    return (
      <article className="lifecycle-demo m-5">
        <h2>클래스 컴포너트의 라이프사이클 메서드</h2>
        <label>
          <input data-checkbox type="checkbox" name="checkbox" /> checkbox
        </label>
      </article>
    )
  }

  // 커밋 단계 (브라우저 DOM) ---------------------------------------

  // 마운트 이후 실행되는 라이프사이클 메서드(콜백 함수)
  componentDidMount() {
    // 리액트 렌더링 -> 브라우저 렌더링(페인팅) -> 이후에 실행
    // 사용자와 대면한 실제 UI (상호작용)
    console.log('componentDidMount', document.querySelector('.lifecycle-demo'))

    // DOM 접근/조작 (리액트 렌더링 프로세스와 무관, 부수 효과)
    // 리액트가 할 수 없는 일
    const checkebox = document.querySelector('.lifecycle-demo [data-checkbox]')
    checkebox.checked = true
    checkebox.focus()
  }

  // 마운트 시점 ---------------------------------------------------
}
