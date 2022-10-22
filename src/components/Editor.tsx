import * as monaco from 'monaco-editor'
import { useEffect, useRef } from 'react'

interface EditorProps {
  mdVal: string,
  setMdVal: (val: string) => void
}

export function Editor(props: EditorProps) {
  const editorRef = useRef(null)
  
  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current, {
      value: props.mdVal,
      language: 'markdown',
      automaticLayout: true
    })
    monaco.editor.setTheme('vs-dark')

    editor.onDidChangeModelContent(()=> {
      props.setMdVal(editor.getValue())
    })
  }, [])

  return (
    <div ref={editorRef} style={{width: '100%', height: '100%'}}></div>
  )
}