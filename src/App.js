import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar'
import MyJumbotron from './MyJumbotron';
import PageDetails from './PageDetails';
import MyFooter from './MyFooter';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserLogin from './UserLogin';
import CheckOut from './CheckOut';
import HomePage from './Home/HomePage';



function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/checkout" exact component ={CheckOut} /> 
      <Route path="/User" exact component ={UserLogin} />
      <Route path="/home"> <HomePage/>  </Route>

     
      <Navbar/>
     {/*
     
      <MyJumbotron/>
     <PageDetails/>
     <MyFooter/>
     
     
     */}
     </Switch>
     
     
    </div>
    </Router>
  );
}

export default App;
