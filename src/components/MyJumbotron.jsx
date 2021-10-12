import React from "react";
import { Jumbotron , Container} from "react-bootstrap";
import './MyJumbotron.css';

export default function MyJumbotron() {  
    return (

        <Jumbotron >
  <Container fluid>
    <h1 >Art-Express</h1>
    <p className ="jumbotext">
Making life colorful    </p>
    <img src="https://dbdzm869oupei.cloudfront.net/img/quadres/large/41588.jpg" height="80px" width="80px" alt="something" className="roundedCircle mt-5 mr-5 ml-5 mb-0"></img>
    <img src="https://m.media-amazon.com/images/I/91TN+nabSWL._AC_SL1500_.jpg" height="80px" width="80px" alt="something" className="rounded mt-5 mr-5 ml-5"></img>
    <img src="https://www.superprof.co.uk/blog/wp-content/uploads/2020/01/david-clode-ysmu6i5bfic-unsplash.jpg" height="80px" width="80px" alt="something" className="rounded mt-5 mr-5 ml-5"></img>
    <img src="https://gallerix.se/gallery/3/4/0/7/22719-large.jpg"  height="80px" width="80px" alt="something" className="rounded mt-5 mr-5 ml-5"></img>
  </Container>
</Jumbotron>
    )
}