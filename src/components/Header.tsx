import '../style/Header.less'

export function Header() {
  return (
    <div className='w-100% h-12 bg-#1e1e1e' flex="~">
      <div className="logo"></div>
      <div className='text-2xl c-white'>Reactsume</div>
    </div>
  )
}