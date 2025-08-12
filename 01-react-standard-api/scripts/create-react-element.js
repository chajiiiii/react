// react.element = 실제 DOM 요소 노드를 추상화한 객체
function createElement(type, props, ...children) {
  return {
    $$typeof: Symbol("react.element"),
    // 이 객체는 react 요소라고 표시하는 것.
    // Symbol은 중복될 수 없는 고유한 표시

    key: null,
    props: { ...props, children },
    ref: null,
    type,
  };
}

const h = createElement;

const reactElement = h("div", {
  className: "wrapper",
  children: "division",
});

console.log(reactElement);
