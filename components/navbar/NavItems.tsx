"use client"

import { motion } from 'framer-motion'
import { LinkComponent, GithubButton } from '.'

interface NavItemsProps {
    className?: string;
    onClick?: () => void;
    isOpen: boolean;
}

const NavItems = ({ className, onClick, isOpen }: NavItemsProps) => {
    return (
        <motion.ul className={className} animate={{x: isOpen ? 0 : "-100vw"}}>
            <li onClick={onClick}>
                <LinkComponent name="Strona Główna" to="/" />
            </li>
            <li onClick={onClick}>
                <LinkComponent name="O Nas" to="/about" />
            </li>
            <li onClick={onClick}>
                <LinkComponent name="Kalkulator" to="/calculator/home" />
            </li>
            <li>
                <GithubButton />
            </li>
        </motion.ul>
    )
}

export default NavItems