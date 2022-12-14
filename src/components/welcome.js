import React, { Component } from "react";
import Board from "./board.png";
import Marble1 from "./marble1.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const background1 = {
  backgroundColor: "#C2D9F7",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  fontFamily: "Regular",
};

const background2 = {
  backgroundImage: `url(${Board})`,
  marginTop: "50px",
  marginBottom: "50px",
  borderRadius: "30px",
};

const imageDimensions = {
  height: "15px",
  width: "15px",
};
const oval = {
  height: "250px",
  width: "150px",
  backgroundImage: `url(${Board})`,
  borderRadius: "40px",
};

const circle = {
  height: "100px",
  maxWidth: "85px",
  backgroundImage: `url(${Board})`,
  borderRadius: "35px",
};

const text = {
  fontFamily: "Regular",
};

const header = {
  fontSize: "75px",
};

const startButton = {
  fontSize: "45px",
  borderRadius: "20px",
  borderWidth: "3px",
};

const instructionsButton = {
  fontSize: "35px",
  borderColor: "transparent",
  borderRadius: "20px",
};
class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" style={background1}>
        <h2 className="mt-5 text-center">Welcome to the... </h2>
        <h1 className="text-center mt-4" style={header}>
          Mancala Game!
        </h1>

        <div className="row" style={text}>
          <div className="col">
            <div className="container-fluid">
              <div className="card w-75 mx-auto" style={background2}>
                <div className="card-body">
                  <div className="row mt-4">
                    <div className="col">
                      <div className="border" style={oval}></div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="border" style={oval}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={text}>
          <div className="col text-center">
            <Link to="/start">
              <button
                className="btn btn-outline-success btn-lg mx-auto"
                style={startButton}
              >
                START
              </button>
            </Link>
          </div>
        </div>
        <div className="row" style={text}>
          <div className="col text-center">
            <Link to="/instructions">
              <button
                className="btn btn-outline-dark btn-lg my-4"
                style={instructionsButton}
              >
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
