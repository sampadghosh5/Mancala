import React, { Component } from "react";
import Board from "./board.png";
import Marble1 from "./marble1.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid background1">
        <h2 className="mt-5 text-center">Welcome to the... </h2>
        <h1 className="text-center mt-4 header">Mancala Game!</h1>

        <div className="row text">
          <div className="col">
            <div className="container-fluid">
              <div className="card w-75 mx-auto background2">
                <div className="card-body">
                  <div className="row mt-4">
                    <div className="col">
                      <div className="border d-flex align-items-center oval">
                        <h5 className="mx-auto">0</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                      <div className="border d-flex align-items-center mb-5 circle">
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">3</h5>
                      </div>
                    </div>
                    <div className="col">
                      <div className="border d-flex align-items-center oval">
                        <h5 className="mx-auto">0</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text">
          <div className="col text-center">
            <Link to="/start">
              <button className="btn btn-outline-success btn-lg mx-auto startButton">
                START
              </button>
            </Link>
          </div>
        </div>
        <div className="row text">
          <div className="col text-center">
            <Link to="/instructions">
              <button className="btn btn-outline-dark btn-lg my-4 instructionsButton">
                INSTRUCTIONS
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
