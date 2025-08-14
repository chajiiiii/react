import Logo from './logo'
import Output from './output'

export default function App(props) {
  const { count, targetCount } = props

  return (
    <div className="randomCountUpApp">
      <Logo />
      <Output count={count} targetCount={targetCount} />
    </div>
  )
}
