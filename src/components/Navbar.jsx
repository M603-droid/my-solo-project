import React from "react";
import { Navbar, Nav, Form, FormControl, Button ,NavDropdown} from "react-bootstrap"
import { Fonts } from "react-bootstrap-icons";
import { BsCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import  ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CartIcon from '../components/CartIcon'






export default function MyNav() {  
      return (
        <Navbar bg="light" expand="lg" className="sticky-top"
        >
            <Navbar.Brand> <img src="https://www.kellerisd.net/cms/lib/TX02215599/Centricity/Domain/3267/Images/Art%20Express2.png" alt="logo"  height = "60px" width ="100px"/></Navbar.Brand>


  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse>
    <Nav className="mr-auto">
    <Form inline >
      <FormControl type="text" placeholder="Search for anything" className="rounded"  />
      <Button variant="outline-info" className="rounded">Search</Button>
    </Form>
    </Nav>
    <Nav>
     

      <Nav.Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> </Nav.Link>
      <Nav.Link  className="ml-1 mr-2"   href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></Nav.Link>
      <Link to ="/checkout" className ="checkout_basket">
        <div className="cart_icon mt-1">
          <ShoppingBasketIcon/>
          <CartIcon />
        </div>
      </Link>

      
    
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}