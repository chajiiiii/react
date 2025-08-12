import { LogoFunction } from "./components/logo.js";
import { ShortcutFunction } from "./components/shortcut.js";
import Output from "./components/output.js";

export default function App(props) {
  let isAnimate = true;

  // 조건부 렌더링(Conditional rendering)
  if (props.count >= props.targetCount) {
    console.log("animation end");
    isAnimate = false;
  }

  return React.createElement(
    "div",
    { className: "randomCountUpApp" },
    React.createElement(LogoFunction),
    React.createElement(Output, { isAnimate: isAnimate }, props.count),
    React.createElement(ShortcutFunction)
  );
}
