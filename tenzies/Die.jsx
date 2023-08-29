import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    const diceFace = [
        <i className="fa-solid fa-dice-one fa-2xl"></i>,
        <i className="fa-solid fa-dice-two fa-2xl"></i>,
        <i className="fa-solid fa-dice-three fa-2xl"></i>,
        <i className="fa-solid fa-dice-four fa-2xl"></i>,
        <i className="fa-solid fa-dice-five fa-2xl"></i>,
        <i className="fa-solid fa-dice-six fa-2xl"></i>
    ]
    
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {diceFace[props.value]}
        </div>
    )
}