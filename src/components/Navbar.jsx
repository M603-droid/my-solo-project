import React from "react";
import { Navbar, Nav, Form, FormControl, Button ,NavDropdown} from "react-bootstrap"
import { Fonts } from "react-bootstrap-icons";
import { BsCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import  ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";






export default function MyNav() {  
      return (
        <Navbar bg="light" expand="lg">
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
    <Nav.Link href="#"><BsFillSuitHeartFill/> </Nav.Link>
      <Nav.Link href="#"><BsPersonFill/></Nav.Link>
      <Link to ="/checkout" className ="checkout_basket">
        <div className="cart_icon">
          <ShoppingBasketIcon/>
        </div>
      </Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}