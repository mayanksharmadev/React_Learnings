import { useState } from 'react'
import '../styles/Counter.css'



function Counter() {
    const [count, setCount] = useState(0)

  const increase = () => setCount(prev => prev + 1)
  const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0))
  const reset = () => setCount(0)

  return (
    <div className="app">
      <div className="counter-container">
        <h1>React Counter</h1>

        <div className="display">
          <span>{count}</span>
        </div>

        <div className="button-group">
          <button className="btn decrease" onClick={decrease}>−</button>
          <button className="btn reset" onClick={reset}>Reset</button>
          <button className="btn increase" onClick={increase}>+</button>
        </div>
      </div>
    </div>
  )
}
export default Counter