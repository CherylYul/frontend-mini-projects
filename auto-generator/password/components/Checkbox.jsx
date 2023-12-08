import React from "react"

export default function Checkbox({children}) {
    return (
        <div className="check-box">
            <input type="checkbox" />
            <label>{children}</label>
        </div>
    )
}