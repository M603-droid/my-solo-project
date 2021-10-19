import React from "react";
import CurrencyFormat from "react-currency-format";
import StripeCheckout from "react-stripe-checkout";
function Subtotal() {
    const onToken =(token) =>{
        console.log(token)
    }
  return (
    <div className="subtotal">
      <StripeCheckout
        token={onToken}
        name="Quick-Buy"
        stripeKey="pk_test_51Jlv7iBjeK3TTnbWVjuyFGzl6iygS380HfaAUpx577omHjF6DQUmJTIg6RBaGpyqCSVH8E0LebcdV3S4JrIyIsw800E7Mdh3Nd"
      />
    </div>
  );
}
export default Subtotal;
