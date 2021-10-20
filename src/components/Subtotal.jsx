import React from "react";
import CurrencyFormat from "react-currency-format";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
function Subtotal({price}) {
    const onToken =(token) =>{
        console.log(token)
    }
  return (
    <div className="subtotal mb-4">
        
      <StripeCheckout
      

        token={onToken}

        name="Quick-Buy"
        amount={price * 100}
        
        stripeKey="pk_test_51Jlv7iBjeK3TTnbWVjuyFGzl6iygS380HfaAUpx577omHjF6DQUmJTIg6RBaGpyqCSVH8E0LebcdV3S4JrIyIsw800E7Mdh3Nd"
      />
      <Link to="orders">
          
      <button className="order_button"></button>
      </Link>
    </div>
  );
}
export default Subtotal;


