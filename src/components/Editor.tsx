import * as monaco from 'monaco-editor'
import { useEffect, useRef } from 'react'

export function Editor() {
  const editorRef = useRef(null)

  useEffect(() => {
    console.log('aa');
    
    const editor = monaco.editor.create(editorRef.current, {
      value: '# Hello',
      language: 'markdown',
      automaticLayout: true
    })
    monaco.editor.setTheme('vs-dark')

    editor.onDidChangeModelContent(()=> {
      console.log(editor.getValue());
    })
  }, [])

  return (
    <div ref={editorRef} style={{width: '50%', height: '100%'}}></div>
  )
}