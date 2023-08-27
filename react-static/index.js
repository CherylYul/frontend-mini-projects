// import React from "react"
// import ReactDOM from "react-dom"

function Navbar(props) {
    const style = {backgroundColor: props.mode === "dark" ? "#21222A" : "#FFFFFF"}
    const colorDark = {color: props.mode === "dark" ? "#FFFFFF" : "#918E9B"}
    const colorWhite = {color: props.mode === "white" ? "#2B283A" : "#918E9B"}

    return (
        <nav style={style} >
            <img src="./images/react-icon-small.png" className="nav--icon" />
            <h2 className="nav--logo_text">ReactFacts</h2>
            <div className="nav--mode">
                <p style={colorDark}>Dark</p>
                <div className="nav--toggle">
                    <div className="nav--toggle-btn" onClick={props.handleClick}></div>
                </div>
                <p style={colorWhite}>Light</p>
            </div>
        </nav>
    )
}

function Main(props) {
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

function App() {
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

ReactDOM.render(<App />, document.getElementById("root"))