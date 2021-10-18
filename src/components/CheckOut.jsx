import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increment } from "../actions/";
import { Card, Col, Row, Button, Container , ListGroup, ListGroupItem} from "react-bootstrap";
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
        <Col sm="4"></Col>
        <Col sm="4">
        <Container className="favtrackscard mt-2">
            <ListGroup className="favtrackscards">
 
          {cartItems?.map((cartI) => (
              <ListGroup.Item className="favtrackscard my-2" >

            <>
              <div className="flex flex-col">
                <span className="justify-content-center">
                  <img
                    className="mb-4 mr-3 "
                    src={cartI.image}
                    height="50px"
                    width="50px"
                  />
                </span>
                <span className="cart_price">{cartI.price}</span>
                <span>
                  <BsDashCircle className="mr-2 ml-4" />
                  <button onClick={() => dispatch(increment(cartI))}>
                    Quantity
                  </button>{" "}
                  <BsPlusCircle className="mr-2 ml-2" />
                </span>

                <button
                  onClick={() => dispatch(removeFromCart(cartI))}
                  className="mx-3 mb-2 delete_button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-trash-fill "
                    viewBox="0 0 18 18"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </div>
            </>
            </ListGroup.Item>
          ))}
          </ListGroup>
          </Container>

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
