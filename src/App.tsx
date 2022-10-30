import './App.less'
import { useState } from 'react'

function App() {
  const [ mdVal, setMdVal ] = useState(`\
# Hello

**粗体**

*斜体*

~~删除线~~

---

[链接](https://github.com/gumingWu/Reactsume)

> asdasdsa
>
> asdasds
> > asdaasd

- asdasds
- sadasdas

1. asdasds
2. asdasds
3. asdasds

* [ ] to do
* [x] to do

|标题1|标题2|
|--|--|
|asdsa|asdsa|

<div style="color: red">asdasd</div>
`)

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
