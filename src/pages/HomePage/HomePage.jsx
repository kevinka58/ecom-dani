import React from 'react'
import "./HomePage.scss"
export default function HomePage() {
    return (
        <div>
            <div className="homePage">
                <div className="left">
                    <div className="imgContainer">
                        <img src="Assets/Frog.jpeg" alt="Frog" />
                    </div>
                </div>
                <div className="right">
                        <div className="itemContainer">
                            <span>Hello This is my Home Page</span>
                        </div>
                </div>
            </div>
        </div>
    )
}
