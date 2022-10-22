import * as monaco from 'monaco-editor'
import { useEffect, useRef, useState } from 'react'

export function Editor() {
  const editorRef = useRef(null)
  const [ editorVal, setEditorVal ] = useState('')

  useEffect(() => {
    console.log('aa');
    
    const editor = monaco.editor.create(editorRef.current, {
      value: '# Hello',
      language: 'markdown',
      automaticLayout: true
    })
    monaco.editor.setTheme('vs-dark')

    editor.onDidChangeModelContent(()=> {
      setEditorVal(editor.getValue())
    })
  }, [])

  return (
    <div ref={editorRef} style={{width: '100%', height: '100%'}}></div>
  )
}