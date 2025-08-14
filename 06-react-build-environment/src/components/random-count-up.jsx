import App from './app'

const MIN = 50
const MAX = 90
const ORIGIN_TITLE = document.title

let count, targetCount

const container = document.getElementById('container')
const reactDOMRoot = ReactDOM.createRoot(container)

;(() => {
  reset()
  listenEvents()
})()

function reset() {
  count = 0
  targetCount = getRandomCount()
}

function listenEvents() {
  window.addEventListener('load', animate)
  document.addEventListener('click', replay)
  document.addEventListener('keyup', (e) => {
    if (e.shiftKey && e.key === 'Enter') replay()
  })
}

function render(count) {
  reactDOMRoot.render(<App count={count} targetCount={targetCount} />)
}

function animate() {
  if (count >= targetCount) return
  count += 1
  render(count)
  requestAnimationFrame(animate)
}

function replay() {
  reset()
  setDocumentTitle()
  setAppColor()
  animate()
}

function setDocumentTitle() {
  document.title = `${ORIGIN_TITLE} (${targetCount})`
}

function setAppColor() {
  document.body.style.setProperty('--hue', getRandomHueColor())
}

function getRandomCount(min = MIN, max = MAX) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomHueColor() {
  return getRandomCount(0, 360)
}