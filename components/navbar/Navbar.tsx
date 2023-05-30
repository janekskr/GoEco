'use client'

import LinkComponent from "./LinkComponent"
import Image from "next/image"
import Link from "next/link"
import { useState, useCallback } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
      }, []);
    return (
        <div className="h-[80px] border-b-2 flex items-center justify-between px-[2vw] mx-[5vw]">
            <div>
                <Link href="/"><Image src="/img/logo.png" alt="Logo" height={150} width={150} className=""/></Link>            
            </div>
            <ul className="hidden md:flex items-center gap-9">
                <li>
                    <LinkComponent  name="Strona Główna" to="/"/>
                </li>
                <li>
                    <LinkComponent  name="O Nas" to="/about"/>
                </li>
                <li>
                    <LinkComponent name="Kalkulator" to="/calculator/home" />
                </li>
            </ul>
            <div className="block md:hidden w-[50px] h-[50px] bg-black" onClick={toggleOpen} />
           {isOpen && <ul className="flex flex-col md:hidden items-center gap-5 absolute sm:w-[45vw] w-[90vw] right-[5vw] top-[80px] p-[20px] bg-green-900">
                <li>
                    <LinkComponent  name="Strona Główna" to="/"/>
                </li>
                <li>
                    <LinkComponent  name="O Nas" to="/about"/>
                </li>
                <li>
                    <LinkComponent name="Kalkulator" to="/calculator" />
                </li>
            </ul>}
        </div>
    )
}

export default Navbar