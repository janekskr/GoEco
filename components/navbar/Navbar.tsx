'use client'

import LinkComponent from "./LinkComponent"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {

    return (
        <div className="h-[80px] border-b-2 flex items-center justify-between px-6">
            <div>
                <Link href="/"><Image src="/img/logo.png" alt="Logo" height={150} width={150}/></Link>            
            </div>
            <ul className="flex items-center gap-9">
                <li>
                    <LinkComponent  name="Strona Główna" to="/"/>
                </li>
                <li>
                    <LinkComponent  name="O Nas" to="/about"/>
                </li>
                <li>
                    <LinkComponent name="Kalkulator" to="/calculator" />
                </li>
            </ul>
        </div>
    )
}

export default Navbar