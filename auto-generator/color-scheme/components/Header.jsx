import React from "react"
import { FormContext } from "../App"

export default function Header() {
    const { form, setForm, setData } = React.useContext(FormContext)
    function handleChange(e) {
        setForm(prev => {return {
            ...prev,
            [e.target.name]: e.target.value
        }})
    }
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${form.color.slice(1)}&mode=${form.mode}`)
        const result = await res.json()
        const hexList = []
        for (let i = 0; i < 5; i++) {
            hexList.push(result.colors[i].hex.value)
        }
        setData(hexList)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="color" 
                    name="color" value={form.color} className="no-border"/>
            <select onChange={handleChange} 
                    name="mode" value={form.mode} className="d1d5db">
                <option value="monochrome">Monochrome</option>
                <option value="monochrome-dark">Monochrome-dark</option>
                <option value="monochrome-light">Monochrome-light</option>
                <option value="analogic">Analogic</option>
                <option value="complement">Complement</option>
                <option value="analogic-complement">Analogic-complement</option>
                <option value="triad">Triad</option>
                <option value="quad">Quad</option>
            </select>
            <button className="no-border d1d5db">Get color scheme</button>
        </form>
    )
}