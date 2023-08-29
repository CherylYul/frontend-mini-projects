import React from "react"

export default function Spot(props) {
    return (
        <div className="spot">
            <div className="spot--image" >
                <img src={props.imageUrl} />
            </div>
            <div className="info">
                <div className="spot--location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{props.location}</p>
                    <a href={props.url}>View details</a>
                </div>
                <h1 className="spot--title">{props.title}</h1>
                <p className="spot--date bold">{props.startDate} - {props.endDate}</p>
                <p className="spot--desc">{props.description}</p>
            </div>
        </div>
    )
}