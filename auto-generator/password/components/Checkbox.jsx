import React from "react"
import { PasswordContext } from "../App"

export default function Checkbox({children, check}) {
    const { form, handleChange } = React.useContext(PasswordContext)
    return (
        <div className="check-box">
            <input type="checkbox"
                    onChange={handleChange}
                    name={children}
                    checked={check}
                    id={children} />
            <label htmlFor={children}>{children}</label>
        </div>
    )
}