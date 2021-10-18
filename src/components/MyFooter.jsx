import React from 'react'
import './MyFooter.css'
import { Container, Row, Col, } from "react-bootstrap"
export default function MyFooter(){

    return (
      <Container fluid className="Footer" style={{ fontWeight: "bold" }}>
          <Row>
            <Col md={3} className="p-0" >
              
              <ul>
                <li>
                  <a className= "text-muted" href="#home"><h5>Shop</h5></a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Gift Cards</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Art works  </a>
                </li>
                
              </ul>
            </Col>
            <Col md={3} className="p-0">
              <ul>
                <li>
                  <a className= "text-muted" href="#home"><h5>Sell</h5></a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Item</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Services</a>
                </li>
               
              </ul>
            </Col>
            <Col  md={3} className="p-0" >
              <ul>
                <li>
                  <a className= "text-muted" href="#home"><h5>About</h5></a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Policies</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Advertising</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Carriers</a>
                </li>
              </ul>
            </Col>
            <Col  md={3} className="p-0">
              <ul>
              <li>
                  <a className= "text-muted" href="#home"><h5>Help</h5></a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Help centers</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Privacy Policies</a>
                </li>
                <li>
                  <a className= "text-muted" href="#home">Contact Us</a>
                </li>
              </ul>
            </Col>
                
                <Col md={12} className="copyright">
                  Sweden | English | Sek 
                </Col>       
          </Row>
        </Container>
        
      
    )
  }