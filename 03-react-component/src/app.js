import { LogoFunction as Logo } from "./components/logo.js";
import { ShortcutFunction as Shortcut } from "./components/shortcut.js";
import Output from "./components/output.js";

export default function App(props) {
  // 문 (값이 없다)
  // if (props.count >= props.targetCount) {
  //   isAnimate = false
  // }

  // createElement() 함수 내부에서는 문을 사용할 수 없다.
  // 왜? 값이 없으니까! 문 대신, 식을 사용해야 한다.

  // 식 (값이 있다)
  // const isComplete = props.count >= props.targetCount
  // 논리 연산자 식
  // 삼항 연산자 식
  // 옵셔널 체이닝(?.), null 병합 연산자(??)

  return React.createElement(
    "div",
    { className: "randomCountUpApp" },
    React.createElement(Logo),
    React.createElement(
      Output,
      {
        isAnimate: props.count < props.targetCount ? true : false,
      },
      props.count
    ),
    React.createElement(Shortcut)
  );
}
