import React from "react"

export default function Navbar() {
    return (
        // <div className="center-container">
            <nav className="flex">
                <div className="nav--right flex">
                    <i className="bi bi-caret-up-square-fill"></i>
                    <h3>Adelaide Coffee Shop</h3>
                </div>
                <div className="nav-left flex">
                    <i className="bi bi-cart-fill"></i>
                    <p>your cart</p>
                </div>
            </nav>
        // </div>
    )
}