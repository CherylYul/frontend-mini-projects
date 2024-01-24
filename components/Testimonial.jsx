import React from "react"
import classnames from "classnames"

export default function Testimonial({children, color, name, pos, ...rest}) {
    const allClasses = classnames(color, "testimonial")
    return (
        <div className={allClasses}>
            {color === "simple" ? <></> : <img {...rest} />}
            <div>
                <i class="bi bi-quote"></i>
                <p className="text">{children}</p>
                <p className="name">{name}</p>
                <p className="pos">{pos}</p>
            </div>
        </div>
    )
}