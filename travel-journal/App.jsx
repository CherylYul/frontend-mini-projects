import React from "react"
import data from "./data.js"
import Spot from "./Spot.jsx"

export default function App() {

    const spotElements = data.map(spot => 
            <Spot key={spot.id} {...spot} />
        )

    return (
        <main>
            <header>
                <i className="fa-solid fa-earth-americas"></i>
                <p>my travel journal.</p>
            </header>
            {spotElements}
        </main>
    )
}