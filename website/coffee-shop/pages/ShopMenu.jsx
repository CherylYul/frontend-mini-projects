import React from "react"
import { useOutletContext } from "react-router-dom"
import data from "../data"

export default function ShopMenu() {
    const context = useOutletContext();

    function addToShoppingCart(name) {
        data.forEach(shop => {
            if (shop.id == context.params.id) {
                shop.menu.forEach( food => {
                    if (food.name === name) {
                        food.quantity += 1
                    }
                })
            }
        })
    }

    return (
        <div className="menu-list">
            {
                context.displayShop.menu.map(item => {return (
                    <div className="menu-item" key={`${context.params.id}-${item.name}`}>
                        <img className="menu-item--image" src={`../images/${item.image}`} />
                        <div className="menu-item--info flex">
                            <p className="menu-item--name">{item.name}</p>
                            <p className="menu-item--price">${item.price}.00</p>
                        </div>
                        <p className="menu-item--ingredients">{item.ingredients}</p>
                        <button onClick={() => addToShoppingCart(item.name)}>Add to Cart</button>
                    </div>
                )})
            }
        </div>
    )
}