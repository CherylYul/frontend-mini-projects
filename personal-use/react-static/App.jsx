import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [theme, setTheme] = React.useState("dark")
    document.body.style.background = theme === "dark" ? "#282D35" : "white"
    console.log(theme)

    function toggleTheme() { 
        setTheme(prev => prev === "dark" ? "white" : "dark")
        document.querySelector(".nav--toggle").classList.toggle("active")
    }

    return (
        <div className="container">
            <Navbar mode={theme} handleClick={toggleTheme} />
            <Main mode={theme} />
        </div>
    )
}