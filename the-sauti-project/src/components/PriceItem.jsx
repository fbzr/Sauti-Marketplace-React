import React from 'react'

// "id": 1,
// "product_cat": "Anamal Products",
// "sub_category": "Eggs",
// "product": "Eggs",
// "avg_price": 4

const PriceItem = ({ priceItem }) => {
    return (
        <div>
            <p>{`Product: ${priceItem.product}`}</p>
            <p>{`Category: ${priceItem.product_cat}`}</p>
        </div>
    )
}

export default PriceItem
