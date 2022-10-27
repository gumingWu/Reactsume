import './App.less'
import { useState } from 'react'

function App() {
  const [ mdVal, setMdVal ] = useState('# Hello')

  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className='left'>
          <ToolBar />
          <Editor mdVal={mdVal} setMdVal={setMdVal} />
        </div>
        <div className="right">
          <Resume mdVal={mdVal} />
        </div>
      </div>
    </div>
  )
}

export default App
