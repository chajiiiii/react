// 클래스 리액트 컴포넌트
// 클래스가 리액트 엘리먼트 렌더링

// class 구문(syntax)
// class 클래스 이름 {}

// 리액트 컴포넌트 클래스 작성?
// 리액트.컴포넌트 클래스(super)를 확장한 서브 클래스 생성
class AppButton extends React.Component {
  constructor(props) {
    super(props);
  }

  // 렌더 메서드
  render() {
    // 객체 구조 분해 할당
    const { type, className, disabled, children } = this.props;

    // 리액트 엘리먼트 반환
    return React.createElement(
      "button",
      {
        type: type,
        className: className,
        disabled: disabled,
      },
      this.props.children
    );
  }
}

console.log(AppButton);

// JavaScript에서 클래스로부터 인스턴스(객체)를 생성하려면?
// 리액트에서는 이렇게 사용하면 안됨 ❌
// const appButton = new AppButton();
// console.log(appButton);

// 리액트에서는 이렇게 사용해야 함 ✅
const disabledSubmitButton = React.createElement(
  AppButton,
  {
    disabled: true,
    type: "submit",
    className: "submit-button",
  },
  "폼 제출"
);
console.log(disabledSubmitButton);

const enabledNormalButton = React.createElement(
  AppButton,
  {
    disabled: false,
    type: "button",
    className: "normal-button",
  },
  "표시/감춤"
);
console.log(enabledNormalButton);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      {
        className: "app",
      },
      disabledSubmitButton,
      enabledNormalButton
    );
  }
}

ReactDOM.createRoot(document.getElementById("container")).render(
  React.createElement(App)
);
