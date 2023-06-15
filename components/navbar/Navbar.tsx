'use client'

import { useState, useCallback } from "react"
import {RxHamburgerMenu} from 'react-icons/rx'
import {NavItems, Logo} from "."

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
      }, []);
    return (
        <nav className="h-[80px] border-b-2 flex items-center justify-between px-[2vw] mx-[5vw]">
            <Logo />
            <NavItems className="hidden lg:flex items-center gap-9" isOpen={true}/>
            <RxHamburgerMenu className="block lg:hidden cursor-pointer" size={40} onClick={toggleOpen} />
            <NavItems onClick={() => setIsOpen(false)} className="flex flex-col lg:hidden z-20 items-center gap-5 absolute md:w-[45vw] sm:w-[55vw] w-[90vw] rounded-3xl right-[5vw] top-[80px] p-[20px] bg-[rgba(0,0,0,.7)] backdrop-blur-sm" isOpen={isOpen} />
        </nav>
    )
}

export default Navbar