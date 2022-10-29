export function Header() {
  return (
    <div className='h-12 bg-#1e1e1e flex items-center justify-between px-8'>
      <div className="flex items-center">
        <div className="logo mr-2"></div>
        <div className='headerTitle'>Reactsume</div>
      </div>
      <div className="flex">
        <Print />
        <SocialLinks />
        <User />
      </div>
    </div>
  )
}