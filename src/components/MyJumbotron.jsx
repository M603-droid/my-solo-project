import React from "react";
import { Jumbotron , Container, Tooltip, } from "react-bootstrap";
import './MyJumbotron.css';

export default function MyJumbotron() {  
    return (

        <Jumbotron >
  <Container fluid>
    <h1 >Quick-buy</h1>
    <p className ="jumbotext">
FIND IT. LOVE IT. BUY IT   </p>

  
    <img src="https://liftoff-shop.imgix.net/rrh/images/categories/mens-apparel-24302.jpg" height="80px" width="80px" alt="something" className="roundedCircle mt-5 mr-5 ml-5 mb-0">
      
    </img> 

    <img src="https://liftoff-shop.imgix.net/rrh/images/categories/ladies-apparel-24303.jpg" height="80px" width="80px" alt="something" className="rounded mt-5 mr-5 ml-5"></img>
    <img src="http://threadcurve.com/wp-content/uploads/2020/06/jewelry-insurance-may282021.jpg" height="80px" width="80px" alt="something" className="rounded mt-5 mr-5 ml-5"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRK3TnqQSpnqHU8VtEcU8g_7XXVHmET3yLHA&usqp=CAU"  height="80px" width="80px" alt="something" className="rounded mt-5 mr-5 ml-5"></img>
  </Container>
</Jumbotron>
    )
}