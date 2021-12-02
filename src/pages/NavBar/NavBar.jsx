import React from 'react'
import "./NavBar.scss"

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#homepage" className="logo">Dani's Shop</a>
                    <div className="itemContainer">
                        <span>Instagram account:</span>
                    </div>
                    <div className="itemContainer">
                        <span>Twitter:</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger"></div>
                </div>
            </div>
        </div>
    )
}
