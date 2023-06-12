import React from 'react'
import { motion } from 'framer-motion'
import LinkComponent from './LinkComponent'
import GithubButton from './GithubButton';

interface NavItemsProps {
    className?: string;
    onClick?: () => void;
    isOpen: boolean;
}

const NavItems = ({ className, onClick, isOpen }: NavItemsProps) => {
    return (
        <motion.ul className={className} animate={{x: isOpen ? 0 : '100vw'}}>
            <li onClick={onClick} className="w-full md:w-auto">
                <LinkComponent name="Strona Główna" to="/" />
            </li>
            <li onClick={onClick} className="w-full md:w-auto">
                <LinkComponent name="O Nas" to="/about" />
            </li>
            <li onClick={onClick} className="w-full md:w-auto">
                <LinkComponent name="Kalkulator" to="/calculator/home" />
            </li>
            <li>
                <GithubButton />
            </li>
        </motion.ul>
    )
}

export default NavItems