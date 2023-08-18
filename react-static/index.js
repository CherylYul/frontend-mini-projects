// import React from "react"
// import ReactDOM from "react-dom"

function Navbar() {
    return (
        <nav>
            <img src="./images/react-icon-small.png" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

function Main() {
    return (
        <main>
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
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))