import React from "react"

export default function Main(props) {
    const style = props.mode === "dark" ? 
        {
            backgroundColor: "#282D35",
            color: "#FFFFFF"
        } :
        {
            backgroundColor: "#FFFFFF",
            color: "#282D35"
        }

    return (
        <main style={style} >
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}