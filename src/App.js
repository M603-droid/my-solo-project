import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import MyJumbotron from './components/MyJumbotron';
import PageDetails from './components/PageDetails';
import MyFooter from './components/MyFooter';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <MyJumbotron/>
     <PageDetails/>
     <MyFooter/>

    </div>
  );
}

export default App;
