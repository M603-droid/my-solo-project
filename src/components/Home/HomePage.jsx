import MyFooter from "../MyFooter"
import MyJumbotron from '../MyJumbotron'
import Navbar from '../Navbar'
import {Row , Col} from "react-bootstrap"
import AllProducts from "../AllProducts"


const HomePage = () => {
    return (
     
        <div id="homeshadow">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <Navbar/>
           <MyJumbotron/>
           <AllProducts/>
           <MyFooter/>
        </Col>
       </Row>
    </div>
    
    )
}

export default HomePage
