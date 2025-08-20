import './print-count.css'

export default function PrintCount(props) {
  console.log('PrintCount rendered')
  return (
    <output className="print-count" style={{ padding: 12 }}>
      {props.count}
    </output>
  )
}
