import React from "react"
import Die from "./Die"
import Header from "./Header"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rollTimes, setRollTimes] = React.useState(0)
    const [bestTime, setBestTime] = React.useState(
        JSON.parse(localStorage.getItem("best"))
    )
    
    React.useEffect(() => {
        if ((rollTimes < bestTime || !bestTime) && rollTimes !== 0) {
            setBestTime(rollTimes)
            localStorage.setItem("best", JSON.stringify(bestTime))
        }
    }, [tenzies])
    
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.floor(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
            setRollTimes(prevNum => prevNum + 1)
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setRollTimes(0)
            setTenzies(false)
            setDice(allNewDice())
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            {tenzies && <Confetti 
                width={window.visualViewport.width}
                height={window.visualViewport.height}
            />}
            <Header />
            <div className="dice-container">
                {diceElements}
            </div>
            <div>
                <p className="roll-times bold">Number of Rolls: {rollTimes}</p>
                <p className="best-time bold">Best time: {bestTime}</p>
                <button className="roll-dice bold" onClick={rollDice}>
                    {tenzies ? "New Game" : "Roll"}
                </button>
            </div>
        </main>
    )
}