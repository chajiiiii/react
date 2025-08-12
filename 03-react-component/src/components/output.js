export default function Output(props) {
  let classNames = "output";

  if (props.isAnimate) {
    classNames += " is-animate";
  }
  return React.createElement(
    "output",
    { className: classNames },
    props.children
  );
}
