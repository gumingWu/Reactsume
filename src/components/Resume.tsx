import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ResumeProps {
  mdVal?: string,
  setMdVal?: (val: string) => void
}

function Wu() {
  return (
    <div>我是Wu</div>
  )
}

export function Resume(props: ResumeProps) {
  const [md, setMd] = useState(props?.mdVal)

  useEffect(() => {
    setMd(props?.mdVal)
  }, [props.mdVal])

  // const components = {
  //   wu: Wu
  // }

  return (
    <ReactMarkdown
    className='markdown-body'
      components={{
        wu() {
          return (
            <div>我是wu</div>
          )
        }
      }}
      remarkPlugins={[remarkGfm]}
    >
      {md}
    </ReactMarkdown>
  )
}
