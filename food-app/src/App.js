
import './App.css';
import Home from './Screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './Screens/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element ={<Home/>}/>
        <Route exact path = "/login" element ={<Login/>}/>
      </Routes>


    </Router>
   
  );
}

export default App;
