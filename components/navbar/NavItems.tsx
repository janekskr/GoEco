import React from 'react'
import LinkComponent from './LinkComponent'
import GithubButton from './GithubButton';

interface NavItemsProps {
    className: string;
    onClick?: () => void
}

const NavItems = ({className, onClick}: NavItemsProps) => {
    return (
        <ul className={className}>
            <li  onClick={onClick}>
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
        </ul>
    )
}

export default NavItems