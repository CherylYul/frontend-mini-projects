import React from "react"

export default function Radio({children, choiceGroup}) {
    return (
        <div className="radio">
            <input type="radio" name={choiceGroup} value={children}/>
            <label htmlFor={children}>{children}</label>
        </div>
    )
}