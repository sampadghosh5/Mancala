import React, { Component } from "react";
import Marble1 from "./marble1.png";
import { BrowserRouter as Link } from "react-router-dom";

import {
  background1,
  background2,
  text,
  imageDimensions,
  oval,
  circle,
  startButton,
  instructionsButton,
  header,
} from "./styles.js";
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
