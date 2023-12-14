import React from "react"
import { PasswordContext } from "../App"

export default function Radio({children}) {
    const { form, handleChange } = React.useContext(PasswordContext)

    return (
        <div className="radio">
            <input type="radio" 
                    onChange={handleChange}
                    name={form.Requirements} 
                    value={children} 
                    id={children} 
                    checked={form.Requirements === children} />
            <label htmlFor={children}>{children}</label>
        </div>
    )
}