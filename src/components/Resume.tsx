import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

interface ResumeProps {
  mdVal?: string,
  setMdVal?: (val: string) => void
}

export function Resume(props: ResumeProps) {
  const [md, setMd] = useState(props?.mdVal)

  useEffect(() => {
    setMd(props?.mdVal)
  }, [props.mdVal])

  return (
    <ReactMarkdown>
      {md}
    </ReactMarkdown>
  )
}
