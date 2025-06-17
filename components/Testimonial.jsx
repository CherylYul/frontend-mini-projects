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

//   <Testimonial color="simple" name="Bob Ziroll" pos="Frontend Developer">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. 
//     Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
//   </Testimonial>