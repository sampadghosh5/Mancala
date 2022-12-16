import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./components/welcome";
import Normal from "./components/normal";
import Start from "./components/start";
import Challenge from "./components/challenge";
import Multiplayer from "./components/multiplayer";
import Instructions from "./components/instructions";
import BoardTest from "./components/boardmakingtest";
import Win from "./components/win";
import Lose from "./components/lose";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route exact path="/instructions" element={<Instructions />}></Route>
      <Route exact path="/start" element={<Start />}></Route>
      <Route exact path="/normal" element={<Normal />}></Route>
      <Route exact path="/challenge" element={<Challenge />}></Route>
      <Route exact path="/multiplayer" element={<Multiplayer />}></Route>
      <Route exact path="/boardtest" element={<BoardTest />}></Route>
      <Route exact path="/win" element={<Win />}></Route>
      <Route exact path="/lose" element={<Lose />}></Route>
    </Routes>
  );
}

export default App;
