import './App.less'
import { useState } from 'react'

function App() {
  const [ mdVal, setMdVal ] = useState('# Hello')

  return (
    <div className="App">
      <div className='left'>
        <Editor mdVal={mdVal} setMdVal={setMdVal} />
      </div>
      <div className="right">
        <Resume mdVal={mdVal} />
      </div>
    </div>
  )
}

export default App
