import MyFooter from "../MyFooter"
import MyJumbotron from '../MyJumbotron'
import Navbar from '../Navbar'
import PageDetails from '../PageDetails'
import {Row , Col} from "react-bootstrap"


const HomePage = () => {
    return (
     
        <div id="homeshadow">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <Navbar/>
           <MyJumbotron/>
           <PageDetails/>
           <MyFooter/>
        </Col>
       </Row>
    </div>
    
    )
}

export default HomePage
