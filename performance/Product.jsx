import React from "react"

function Product({ product, style, chooseProduct }) {
    return (
        <div className="product-card" style={style} onClick={() => chooseProduct(product.id)}>
            <p className="truncate">{product.name}</p>
        </div>
    )
}

export default React.memo(Product)