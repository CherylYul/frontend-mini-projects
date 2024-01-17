import React from "react"
import { OpenContext } from "../App"
import data from "../data"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export default function Slider() {
    const { toggleOpen } = React.useContext(OpenContext)
    const [ foodList , setFoodList ] = React.useState([])

    React.useEffect(() => {
        data.forEach(shop => 
            shop.menu.forEach(food =>
                setFoodList(prev => [
                    ...prev,
                    food.quantity > 0 ? food : null
                ])
            )
        )
    }, [])

    return (
        <div className="slider">
            <div className="slider-content">
                <div className="header">
                    <h1>Order Summary</h1>
                    <i onClick={toggleOpen.bind(this, false)} className="bi bi-x-square-fill"></i>
                </div>
                <div className="body">
                    {
                        foodList.map(food => food &&
                            <div className="flex order-summary" key={uuidv4()}>
                                <h4>{food.name}</h4>
                                <span>remove</span>
                                <p>x {food.quantity}</p>
                                <p>${food.price * food.quantity}.00</p>
                            </div>)                             
                    }
                </div>
                <footer>
                    <button className="order">ORDER</button>
                </footer>
            </div>
        </div>
    )
}