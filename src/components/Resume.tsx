import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

interface ResumeProps {
  mdVal?: string,
  setMdVal?: (val: string) => void
}

export function Resume(props: ResumeProps) {
  const [md, setMd] = useState(props?.mdVal.replaceAll('\r\n', '\n'))

  useEffect(() => {
    setMd(props?.mdVal.replaceAll('\r\n', '\n'))
  }, [props.mdVal])

  return (
    <ReactMarkdown>
      {md}
    </ReactMarkdown>
  )
}
