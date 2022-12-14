import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Marble1 from "./marble1.png";
import { pits } from "./board.js";
import {
  background1,
  background2,
  text,
  imageDimensions,
  oval,
  circle,
  backButton,
} from "./styles.js";

class Normal extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid" style={background1}>
        <div className="row" style={text}>
          <div className="col">
            <div className="container-fluid">
              <div className="card w-75 mx-auto" style={background2}>
                <div className="card-body">
                  <div className="row mt-4">
                    <div className="col">
                      <div
                        className="border d-flex align-items-center"
                        style={oval}
                      >
                        <h5 className="mx-auto">{pits[0]}</h5>
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
                        <h5 className="mx-auto">{pits[13]}</h5>
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
                        <h5 className="mx-auto">{pits[1]}</h5>
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
                        <h5 className="mx-auto">{pits[12]}</h5>
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
                        <h5 className="mx-auto">{pits[2]}</h5>
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
                        <h5 className="mx-auto">{pits[11]}</h5>
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
                        <h5 className="mx-auto">{pits[3]}</h5>
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
                        <h5 className="mx-auto">{pits[10]}</h5>
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
                        <h5 className="mx-auto">{pits[4]}</h5>
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
                        <h5 className="mx-auto">{pits[9]}</h5>
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
                        <h5 className="mx-auto">{pits[5]}</h5>
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
                        <h5 className="mx-auto">{pits[8]}</h5>
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
                        <h5 className="mx-auto">{pits[6]}</h5>
                      </div>
                    </div>
                    <div
                      className="border d-flex align-items-center mx-2"
                      style={oval}
                    >
                      <h5 className="mx-auto">{pits[0]}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5" style={text}>
          <div className="col text-center">
            <Link to="/start">
              <button
                className="btn btn-outline-primary btn-lg mx-auto"
                style={backButton}
              >
                BACK
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Normal;
