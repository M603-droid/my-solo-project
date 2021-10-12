import React from "react";
import Subtotal from "./Subtotal";
import './Checkout.css';
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../actions/'



const Checkout = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.products.cart)
    console.log(cartItems)

    const totalItems = cartItems.length > 0 ? cartItems?.map(carti => carti.internal_department_id).reduce((totalItems, item) => totalItems + item) : cartItems.length
    // totalItems
    console.log(totalItems)
    return (
        <div className="checkout">
            {
                cartItems?.map((cartI) => (
                    <>
                        <div className="flex flex-col">

                            <span >{cartI.internal_department_id}</span>
                            <button onClick={() => dispatch(removeFromCart(cartI))} className="mx-3">Delete</button>
                        </div>

                    </>))
            }
            <span>Total: ${totalItems}</span>
            {cartItems.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>)}

            {
                cartItems.length === 0 && (
                    <div className="checkout_left">
                        <div>
                            <h2 className="checkout_title"> Your shopping cart is empty</h2>
                            <p>you have no item sin your basket</p>
                        </div>

                    </div>)
            }

        </div>
    )
}

export default Checkout