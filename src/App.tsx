import { useState } from 'react'
import './App.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>Vite + React</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMRaaa
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App