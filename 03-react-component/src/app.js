import { LogoFunction } from "./components/logo.js";
import { ShortcutFunction } from "./components/shortcut.js";
import Output from "./components/output.js";

export default function App(props) {
  return React.createElement(
    "div",
    { className: "randomCountUpApp" },
    React.createElement(LogoFunction),
    React.createElement(Output, {}, props.count),
    React.createElement(ShortcutFunction)
  );
}
