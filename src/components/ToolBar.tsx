export function ToolBar() {
  const iconStyle = {
    color: '#fff',
    fontSize: '26px',
    margin: '0 5px',
    cursor: 'pointer'
  }

  return (
    <div className="h-2em bg-#1e1e1e flex justify-center items-center">
      <div className="i-carbon-code" style={iconStyle} title="代码块"></div>
      <div className="i-carbon-list" style={iconStyle} title="无序列表"></div>
      <div className="i-carbon-list-numbered" style={iconStyle} title="有序列表"></div>
    </div>
  )
}