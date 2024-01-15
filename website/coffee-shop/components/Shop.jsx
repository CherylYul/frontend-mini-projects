import React from "react"
import { Link } from "react-router-dom"

export default function Shop({id, coverImg, stats, location, title}) {
    return (
        <div className="shop">
            <img src={`../images/${coverImg}`} className="shop--image" />
            <div className="flex">
                <div className="shop--info">
                    <i className="bi bi-star-fill"></i>
                    <span>{stats.rating}</span>
                    <span className="gray"> ({stats.reviewCount}) • </span>
                    <span className="gray">{location}</span>
                    <h2 className="shop--title">{title}</h2>
                </div>
                <Link className="shop--link" to={`./${id}`}>SHOP DETAILS</Link>
            </div>
        </div>
    )
}