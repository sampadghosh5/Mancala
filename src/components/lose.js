import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Image from "./lose.png";

const imageDimension = {
  height: "250px",
  width: "400px",
};
class Lose extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid background1">
        <div className="row text">
          <div className="col">
            <h1 className="my-5 text-center header">I'm sorry!</h1>
          </div>
        </div>
        <div className="row text text-center">
          <div className="col mx-5">
            <h2>You have lost the game.</h2>
            <img
              src={Image}
              className="rounded mx-auto d-block mt-4"
              alt="This won't display"
              style={imageDimension}
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

export default Lose;
