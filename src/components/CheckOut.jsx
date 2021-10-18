import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increment } from "../actions/";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";
const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart);
  console.log(cartItems);

  const totalItems =
    cartItems.length > 0
      ? cartItems
          ?.map((carti) => carti.price)
          .reduce((totalItems, item) => totalItems + item)
      : cartItems.length;
  // totalItems
  console.log(totalItems);
  return (
      
      
    <div className="checkout">
        <section className="main-cart-section ml-4">
          <h1>shopping Cart</h1>
          <p className="total-items ml-3">
            you have <span className="total-items-count">{cartItems.length} </span>{" "}
            items in shopping cart
          </p>
        </section>
      <Row>
      
        <Col sm="3">
        
          {cartItems?.map((cartI) => (
            <>
              <div className="flex flex-col">
                <span className="justify-content-center">
                  <img
                    className="mb-4 mr-3"
                    src={cartI.image}
                    height="50px"
                    width="50px"
                  />
                </span>
                <span className="mr-4">{cartI.price}</span>
                <span>
                  <BsDashCircle />
                  <button onClick={() => dispatch(increment(cartI))}>
                    Qunatity
                  </button>{" "}
                  <BsPlusCircle />
                </span>

                <button
                  onClick={() => dispatch(removeFromCart(cartI))}
                  className="mx-3 mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </div>
            </>
          ))}
        </Col>
      </Row>

      <span>Total: ${totalItems}</span>
      {cartItems.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}

      {cartItems.length === 0 && (
        <div className="checkout_left">
          <div>
            <h2 className="checkout_title"> Your shopping cart is empty</h2>
            <p>you have no items in your basket</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
