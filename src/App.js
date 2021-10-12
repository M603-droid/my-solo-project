import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import MyJumbotron from './components/MyJumbotron';
import PageDetails from './components/PageDetails';
import MyFooter from './components/MyFooter';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserLogin from './components/UserLogin';
import CheckOut from './components/CheckOut';
import HomePage from './components/Home/HomePage';



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
