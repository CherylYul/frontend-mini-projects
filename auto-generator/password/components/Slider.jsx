import React from "react"

export default function Slider({children}) {
    return (
        <div className="slider">
            <label htmlFor={children}>{children}</label>
            <input type="number" min="1" max="50" defaultValue="12" />
            <input type="range" min="1" max="50" defaultValue="12" />
        </div>
    )
}