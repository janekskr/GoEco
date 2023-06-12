'use client'

import { useState, useCallback } from "react"
import {RxHamburgerMenu} from 'react-icons/rx'
import NavItems from "./NavItems"
import Logo from "./Logo"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
      }, []);
    return (
        <nav className="h-[80px] border-b-2 flex items-center justify-between px-[2vw] mx-[5vw]">
            <Logo />
            <NavItems className="hidden md:flex items-center gap-9" isOpen={true}/>
            <RxHamburgerMenu className="block md:hidden cursor-pointer" size={40} onClick={toggleOpen} />
            <NavItems onClick={() => setIsOpen(false)} className="flex flex-col md:hidden z-20 items-center gap-5 absolute sm:w-[45vw] w-[90vw] rounded-3xl right-[5vw] top-[80px] p-[20px] bg-[rgba(0,0,0,.7)] " isOpen={isOpen} />
        </nav>
    )
}

export default Navbar