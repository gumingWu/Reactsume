export function ToolBar() {
  const iconStyle = {
    color: '#fff',
    fontSize: '26px',
    margin: '0 5px',
    cursor: 'pointer'
  }

  return (
    <div className="h-2em bg-#1e1e1e flex justify-center items-center">
      <div className="i-carbon-text-bold hover:bg-sky-500" style={iconStyle} title="粗体"></div>
      <div className="i-carbon-text-italic hover:bg-sky-500" style={iconStyle} title="斜体"></div>
      <div className="i-carbon-text-strikethrough hover:bg-sky-500" style={iconStyle} title="删除线"></div>
      {/* <div className="i-carbon-text-underline hover:bg-sky-500" style={iconStyle} title="下划线"></div> */}
      <div className="i-carbon-undefined hover:bg-sky-500" style={iconStyle} title="分割线"></div>
      <div className="i-carbon-link hover:bg-sky-500" style={iconStyle} title="链接"></div>
      <div className="i-carbon-code hover:bg-sky-500" style={iconStyle} title="代码块"></div>
      <div className="i-carbon-notebook-reference hover:bg-sky-500" style={iconStyle} title="引用块"></div>
      <div className="i-carbon-list hover:bg-sky-500" style={iconStyle} title="无序列表"></div>
      <div className="i-carbon-list-numbered hover:bg-sky-500" style={iconStyle} title="有序列表"></div>
      <div className="i-carbon-list-checked hover:bg-sky-500" style={iconStyle} title="检查列表"></div>
    </div>
  )
}
