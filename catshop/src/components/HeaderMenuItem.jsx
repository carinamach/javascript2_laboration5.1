import React from 'react'
import { useState } from 'react'

export const HeaderMenuItem = (props) => {

    //    let clicked = false

    const IWasClicked = () => {
        props.onPageMenuClick(props.text)
    }

    return (
        <li>
            <a
                onClick={IWasClicked}
                //className="headeranchor"
                className={`headeranchor ${props.activePage === props.text ? 'active' : ''}`}
                href="#">
                {props.text}
            </a>
        </li>
    )
}