import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Marble1 from "./marble1.png";
import { pits, pit_click, newgame, setAI } from "./board.js";
import "./styles.css";
class Challenge extends Component {
  state = {
    counter: 0,
  };

  handleClick(i) {
    pit_click(i);
    this.setState({ counter: this.counter + 1 });
  }

  updateui() {
    newgame();
    this.setState({ counter: this.counter + 1 });
  }

  render() {
    return (
      <div className="container-fluid background1" onLoad={() => newgame()}>
        <div className="row text" onLoad={() => setAI(true)}>
          <div className="col">
            <div className="container-fluid">
              <h1 id="player" className="turn">
                text4
              </h1>
              <div id="game" className="card w-75 mx-auto background2">
                <div className="card-body">
                  <div className="row mt-4">
                    <div className="col">
                      <div
                        id="0"
                        className="border d-flex align-items-center oval blueBorder"
                      >
                        <h5 className="mx-auto pottext">{pits[0]}</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="13"
                        onClick={() => this.handleClick(13)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[13]}</h5>
                      </div>
                      <div
                        id="1"
                        onClick={() => this.handleClick(1)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[1]}</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="12"
                        onClick={() => this.handleClick(12)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[12]}</h5>
                      </div>
                      <div
                        id="2"
                        onClick={() => this.handleClick(2)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[2]}</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="11"
                        onClick={() => this.handleClick(11)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[11]}</h5>
                      </div>
                      <div
                        id="3"
                        onClick={() => this.handleClick(3)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[3]}</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="10"
                        onClick={() => this.handleClick(10)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[10]}</h5>
                      </div>
                      <div
                        id="4"
                        onClick={() => this.handleClick(4)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[4]}</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="9"
                        onClick={() => this.handleClick(9)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[9]}</h5>
                      </div>
                      <div
                        id="5"
                        onClick={() => this.handleClick(5)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[5]}</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="8"
                        onClick={() => this.handleClick(8)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[8]}</h5>
                      </div>
                      <div
                        id="6"
                        onClick={() => this.handleClick(6)}
                        className="border d-flex align-items-center mb-5 circle"
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="mx-auto imageDimensions"
                        />
                        <h5 className="mx-auto">{pits[6]}</h5>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        id="7"
                        className="border d-flex align-items-center oval redBorder"
                      >
                        <h5 className="mx-auto pottext">{pits[7]}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 text">
          <div className="col text-center">
            <Link to="/start" onClick={() => this.updateui()}>
              <button
                id="backButton"
                className="btn btn-outline-primary btn-lg mx-auto backButton"
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

export default Challenge;
