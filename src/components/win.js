import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Image from "./win.png";

class Win extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid background1">
        <div className="row text">
          <div className="col">
            <h1 className="my-5 text-center header">CONGRATULATIONS!</h1>
          </div>
        </div>
        <div className="row text text-center">
          <div className="col mx-5">
            <h2 className="my-4">You have won the game!</h2>
            <img
              src={Image}
              class="rounded mx-auto d-block"
              alt="This won't display"
            ></img>
          </div>
        </div>
        <div className="row my-5 text">
          <div className="col text-center">
            <Link to="/">
              <button className="btn btn-outline-dark btn-lg mx-auto backButton">
                Try again
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Win;
