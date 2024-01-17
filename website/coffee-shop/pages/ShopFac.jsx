import React from "react"
import { useOutletContext } from "react-router-dom"

export default function ShopFac() {
    const context = useOutletContext();
    return (
        <ul>
            {
                context.displayShop.facilities.map(
                    item => <li className="shop-detail--facilities" key={item}>{item}</li>)
            }
        </ul>
    )
}