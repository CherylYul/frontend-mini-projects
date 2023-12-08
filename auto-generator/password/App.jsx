import React from "react"
import Checkbox from "./components/Checkbox"
import Radio from "./components/Radio"
import Slider from "./components/Slider"

export default function App() {
    return (
        <div className="center-container">
            <Checkbox>Uppercase</Checkbox>
            <Checkbox>Lowercase</Checkbox>
            <Checkbox>Numbers</Checkbox>
            <Checkbox>Symbols</Checkbox>
            <Radio choiceGroup="custom">Easy to say</Radio>
            <Radio choiceGroup="custom">Easy to read</Radio>
            <Radio choiceGroup="custom">All characters</Radio>
            <Slider>Password Length</Slider>
        </div>
    )
}