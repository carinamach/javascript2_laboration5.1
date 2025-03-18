import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const HeaderMenuItem = ({text, navLink}) => {

    //    let clicked = false

    const location = useLocation();

    return (
        <li>
            <Link 
            to = {navLink}
                //className="headeranchor"
               className={`headeranchor ${location.pathname === navLink ? 'active' : ''}`}
            >
                {text}
            </Link>
        </li>
    )
}