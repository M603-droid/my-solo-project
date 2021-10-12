import React from 'react'
import { useSelector } from 'react-redux'

const CartIcon = () => {

    const cartItems = useSelector(state => state.products.cart)
    console.log(cartItems)

    return (
        <div>
            <span>{cartItems?.length}</span>
        </div>
    )
}

export default CartIcon