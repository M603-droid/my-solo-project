import React from "react";
import { Navbar, Nav, Form, FormControl, Button ,Badge} from "react-bootstrap"
import { Fonts } from "react-bootstrap-icons";
import { BsCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import  ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CartIcon from '../components/CartIcon'
import Favorites from "./Favorites";
import './Navbar.css'







export default function MyNav() {  
      return (
        <Navbar bg="light" expand="lg" className="sticky-top"
        >
            <Navbar.Brand className="title_navbar">Quick-Buy</Navbar.Brand>


  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse>
    <Nav className="mr-auto">
    
    </Nav>
    <div className="user_cart_fav d-flex flex-row">

    <Nav>
<Form inline  >
      <FormControl type="text" placeholder="Search for anything" className="rounded search"  />
      <Button variant="outline-info" className="rounded mr-4">Search</Button>
    </Form>
     
     <Link to ="/favorites" className ="favorites-add mt-1 shopping_basket">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
   <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
 </svg>   </Link>
 
 <Link to ="/user" className ="user_icon ml-2 mr-2 mt-1 shopping_basket">
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
   <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
 </svg> </Link>
       <Link to ="/checkout" className ="checkout_basket ">
         <div className="cart_icon mt-2 mr-2 ">
           <ShoppingBasketIcon className="shopping_basket"/><Badge variant="danger"><CartIcon /></Badge>
           
         </div>
       </Link>
 
       
     
     </Nav>
    </div>
    
    
  </Navbar.Collapse>
</Navbar>
    )
}