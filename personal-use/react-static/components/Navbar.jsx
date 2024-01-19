import React from "react"

export default function Navbar(props) {
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