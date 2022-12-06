import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./components/welcome";
import Normal from "./components/normal";
import Start from "./components/start";
import Challenge from "./components/challenge";
import Multiplayer from "./components/multiplayer";
import Instructions from "./components/instructions";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
           <Routes>
                 <Route exact path='/' element={< Welcome />}></Route>
                 <Route exact path='/instructions' element={< Instructions />}></Route>
                 <Route exact path='/start' element={< Start />}></Route>
                 <Route exact path='/normal' element={< Normal />}></Route>
                 <Route exact path='/challenge' element={< Challenge />}></Route>
                 <Route exact path='/multiplayer' element={< Multiplayer />}></Route>
          </Routes>


  
    
  );
}

export default App;
