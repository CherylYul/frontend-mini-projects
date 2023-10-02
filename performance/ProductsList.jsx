import React from "react"
import Product from "./Product"
import productsData from "./data"

export default function ProductsList(props) {

    const startTime = Date.now()
    const sortProducts = React.useMemo(
        () => [...productsData].sort((a, b) => a.name.localeCompare(b.name))
    , [productsData])
    const endTime = Date.now()
    console.log(`Took ${endTime - startTime}ms`)

    const visibleProducts = props.isSort ? sortProducts : productsData 

    return visibleProducts.map(product => (
        <Product key={product.id} product={product} />
    ))
}