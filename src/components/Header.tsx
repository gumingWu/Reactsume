export function Header() {
  return (
    <div className='h-12 bg-#1e1e1e flex items-center justify-between px-8'>
      <div className="flex items-center">
        <div className="logo mr-2"></div>
        <div className='headerTitle'>Reactsume</div>
      </div>
      <div>
        <a href="https://juejin.cn/user/1469381099657902" target="_blank">
          <div className="i-reactsume-juejin headerIcon"></div>
        </a>
        <a href="https://github.com/gumingWu/Reactsume" target="_blank">
          <div className="i-carbon-logo-github headerIcon"></div>
        </a>
      </div>
    </div>
  )
}