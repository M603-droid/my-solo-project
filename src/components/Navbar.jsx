import React from "react";
import { Navbar, Nav, Form, FormControl, Button ,NavDropdown} from "react-bootstrap"


export default function MyNav() {  
      return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Art-Express</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Form inline >
      <FormControl type="text" placeholder="Search for anything" className="rounded"  />
      <Button variant="outline-success" className="rounded">Search</Button>
    </Form>

    </Nav>
    <Nav>
    <Nav.Link href="#deets">Favorites</Nav.Link>
      <Nav.Link href="#deets">User</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Cart
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}