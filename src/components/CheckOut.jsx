import React from "react";
import Subtotal from "./Subtotal";
import './Checkout.css';


export default function checkout() { 

    return(
        <div className ="checkout">

            <div className ="checkout_left"> 
            <div>
                <h2 className= "checkout_title"> Your shopping cart is empty</h2>
                <p>you have no item sin your basket</p>
            </div>
            
            </div>
            <div className ="checkout_right">
                <Subtotal/>
                 </div>
        </div>
    )
}