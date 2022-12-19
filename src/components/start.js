import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEasyAI, useminimax } from "./board";
import "./styles.css";
class Start extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid background1">
        <div className="row text">
          <div className="col">
            <h1 className="mt-5 text-center header">Let's Play!</h1>
          </div>
        </div>
        <div className="row my-5 text">
          <div className="col text-center">
            <Link to="/normal" onClick={() => useEasyAI()}>
              <button className="btn btn-success btn-lg mx-auto backButton">
                NORMAL
              </button>
            </Link>
          </div>
        </div>
        <div className="row my-5 text">
          <div className="col text-center">
            <Link to="/challenge" onClick={() => useminimax()}>
              <button className="btn btn-danger btn-lg mx-auto backButton">
                EXTREME
              </button>
            </Link>
          </div>
        </div>
        <div className="row my-5 text">
          <div className="col text-center">
            <Link to="/multiplayer">
              <button className="btn btn-primary btn-lg mx-auto backButton">
                MULTIPLAYER
              </button>
            </Link>
          </div>
        </div>
        <div className="row my-5 text">
          <div className="col text-center">
            <Link to="/">
              <button className="btn btn-outline-primary btn-lg mx-auto backButton">
                BACK
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
