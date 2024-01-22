import React from "react"

export default function Spot({imageUrl, location, url, title, startDate, endDate, description}) {
    return (
        <div className="center-container">
            <div className="spot">
                <div className="spot--image" >
                    <img src={`../images/${imageUrl}`} />
                </div>
                <div className="info">
                    <div className="spot--location">
                        <i className="bi bi-pin-map-fill"></i>
                        <p>{location}</p>
                        <a href={url}>View details</a>
                    </div>
                    <h1 className="spot--title">{title}</h1>
                    <p className="spot--date bold">{startDate} - {endDate}</p>
                    <p className="spot--desc">{description}</p>
                </div>
            </div>
        </div>
    )
}