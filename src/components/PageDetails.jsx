import React from "react";
import { Row , Col, Card, Button } from "react-bootstrap";
export default function MyPageDetails() {  

  
    return (
       <Row><Col sm-4>
          <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card></Col>
      
      
      </Row>
    )
}