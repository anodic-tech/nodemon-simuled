import './App.css'
import useRgb from './useRgb'

function App() {

  const rgbMap = useRgb()

  console.log(rgbMap)

  return (
    <div className='container'>
      {rgbMap.map((rgb, i) => {
        return <Led rgb={rgb} index={i} key={i} />
      })}
    </div>
  )
}

export default App

const Led = ({ rgb, index }: { rgb: Rgb, index: number }) => {
  return <div
    className={'led'}
    style={{
      '--i': index,
      background: `rgb(${rgb.r},${rgb.g},${rgb.b})`
    } as React.CSSProperties}
  />
}
