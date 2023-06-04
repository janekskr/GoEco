"use client"
import SidebarItems from './SidebarItems'
import { useCallback, useState } from 'react'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  const toogleOpen = useCallback(() => setIsOpen(value => !value), [])
  return (
    <>
      <SidebarItems className="p-[40px] gap-4 hidden md:flex" />
      {isOpen &&<SidebarItems className='p-[25px] gap-2 flex md:hidden'/>}
    </>


  )
}

export default Sidebar