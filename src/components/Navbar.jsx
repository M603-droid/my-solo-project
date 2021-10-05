import React from "react";
import { Navbar, Nav, Form, FormControl, Button ,NavDropdown} from "react-bootstrap"
import { Fonts } from "react-bootstrap-icons";
import { BsCartFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";





export default function MyNav() {  
      return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home" style={{ color: 'blue' }}>Art-Express</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse>
    <Nav className="mr-auto">
    <Form inline >
      <FormControl type="text" placeholder="Search for anything" className="rounded"  />
      <Button variant="outline-info" className="rounded">Search</Button>
    </Form>

    </Nav>
    <Nav>
    <Nav.Link href="#"><BsFillSuitHeartFill/></Nav.Link>
      <Nav.Link href="#"><BsPersonFill/></Nav.Link>
      <Nav.Link >
     < BsCartFill/>
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}