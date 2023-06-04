import React from 'react'
import LinkComponent from './LinkComponent'
import GithubButton from './GithubButton';

interface NavItemsProps {
    className: string;
    onClick?: () => void
}

const NavItems = ({ className, onClick }: NavItemsProps) => {
    return (
        <ul className={className}>
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
        </ul>
    )
}

export default NavItems