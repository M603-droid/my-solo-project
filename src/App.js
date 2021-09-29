import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import MyJumbotron from './components/MyJumbotron';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <MyJumbotron/>

    </div>
  );
}

export default App;
