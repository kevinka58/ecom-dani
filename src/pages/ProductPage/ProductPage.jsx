import React from 'react'
import "./ProductPage.scss"
export default function ProductPage() {

    const data = [
        {
            name: "Turtle 1",
            price: 25.99,
            image: <img src="Assets/turtle.jpeg" alt="turtle"></img>
        },
        {
            name: "Beaver",
            price: 25.99,
            image: <img src="Assets/beaver1.jpeg" alt="turtle"></img>
        }
    ]
    return (
        <div className="products" id="products">
            <div className="container">
                {data.map(d=>(
                    <div className="card">
                    <div className="top">
                        <div className="image">{d.image}</div>
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                    </div>
                    <div className="price">
                        <h4>{d.price}$</h4>
                    </div>
                    </div>
                ))}
            </div>
            <div>This is where product will be displayed</div>
        </div>
    )
}
