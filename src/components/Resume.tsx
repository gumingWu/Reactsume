import { useState, useEffect, createElement } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

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
    <ReactMarkdown
      className='markdown-body'
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      remarkRehypeOptions={{
        allowDangerousHtml: true,
      }}
    >
      {md}
    </ReactMarkdown>
  )
}
