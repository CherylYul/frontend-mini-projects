import React from "react"
import { useOutletContext } from "react-router-dom"

export default function ShopInfo() {
    const context = useOutletContext();
    return (
        <p>
            {context.displayShop.description}
        </p>
    )
}