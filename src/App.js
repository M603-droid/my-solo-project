import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import MyJumbotron from './components/MyJumbotron';
import MyFooter from './components/MyFooter';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserLogin from './components/UserLogin';
import CheckOut from './components/CheckOut';
import HomePage from './components/Home/HomePage';
import Favorites from './components/Favorites';



function App() {
  return (
    
    <div className="App">
    <Router>
    
      <Switch>
      <Route path="/checkout" exact component ={CheckOut} /> 
      <Route path="/User" exact component ={UserLogin} />
      <Route path="/home" exact component ={HomePage}/>
      <Route path="/favorites" exact component ={Favorites}/>



     
      <Navbar/>
     {/*
     
      <MyJumbotron/>
     <PageDetails/>
     <MyFooter/>
     
     
     */}
     </Switch>
     
     
    </Router>
    </div>

  );
}

export default App;
