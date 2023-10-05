import React from "react"
import { IoPersonSharp } from "react-icons/io5"
import classnames from "classnames"

export default function Avatar({children, variant, ...rest}) {
    const colorList = ["navy", "pink", "red", "blue", "green"]
    const allClasses = classnames(
        variant && `avatar-${variant}`,
        "avatar",
        colorList[Math.floor(Math.random() * 5)]
    )
    return (
        <div className={allClasses}>
            {!variant && <img {...rest}/>}
            {children}
            {variant === "icon" && <IoPersonSharp />}
        </div>
    )
}