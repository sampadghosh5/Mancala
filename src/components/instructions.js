import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
class Instructions extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid background1">
        <div className="row text">
          <div className="col">
            <h1 className="my-5 text-center header">Rules of the Game:</h1>
          </div>
        </div>
        <div className="row text">
          <div className="col mx-5">
            <h2 className="my-4">
              Choose one pot on your side and remove the marbles from it. Drop those marbles counterclockwise, one in each pot.
            </h2>
            <h2 className="my-4">
              1. If you run into your own store, deposit one piece in it. Skip
              your opponent's store.
            </h2>
            <h2 className="my-4">
              2. If the last piece you drop is in your own store, you get a free
              turn.
            </h2>
            <h2 className="my-4">
              3. If the last piece you drop is in an empty hole on your side,
              you capture that piece and any pieces in the hole directly
              opposite.
            </h2>
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

export default Instructions;
