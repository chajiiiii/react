export default function Output(props) {
  const classNames = `output ${props.isAnimate ? "is-animate" : ""}`.trim();
  return /*#__PURE__*/React.createElement("output", {
    className: classNames
  }, props.children);
}