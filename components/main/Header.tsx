const Header = ({children} : {children: React.ReactNode}) => {
  return (
    <header className="flex flex-col sm:flex-row gap-2 justify-between sm:mb-[10px] pb-[10px] border-b-[#29836d] border-b-[2px] w-full items-center flex-shrink-0">
        {children}
    </header>
  )
}

export default Header