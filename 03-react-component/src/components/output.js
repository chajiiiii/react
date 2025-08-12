export default function Output(props) {
  // let classNames = "output";

  // if (props.isAnimate) {
  //   classNames += ' is-animate'
  // }

  const classNames = `output ${props.isAnimate ? "is-animate" : ""}`.trim();

  return React.createElement(
    "output",
    { className: classNames },
    props.children
  );
}
