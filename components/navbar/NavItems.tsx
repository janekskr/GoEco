import React from 'react'
import LinkComponent from './LinkComponent'

interface NavItemsProps {
    className: string;
}

const NavItems = ({className}: NavItemsProps) => {
    return (
        <ul className={className}>
            <li>
                <LinkComponent name="Strona Główna" to="/" />
            </li>
            <li>
                <LinkComponent name="O Nas" to="/about" />
            </li>
            <li>
                <LinkComponent name="Kalkulator" to="/calculator/home" />
            </li>
        </ul>
    )
}

export default NavItems