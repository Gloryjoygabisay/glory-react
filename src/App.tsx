import { useState } from 'react'
import './App.less'
import { Hello } from './components/Hello'

const App = () => {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <Hello name="There you" />
      </div>
      <h1>A simple counter</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export {App}
