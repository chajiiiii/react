export default function Output(props) {
  const classNames = `output ${props.isAnimate ? "is-animate" : ""}`.trim();
  return <output className={classNames}>{props.children}</output>;
}
