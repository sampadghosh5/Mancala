import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Board from "./board.png";
import Marble1 from "./marble1.png";
import Marble2 from "./marble2.png";
import Marble3 from "./marble3.png";

const background1 = {
  backgroundColor: "#C2D9F7",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  fontFamily: "Comic Sans MS",
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
  fontFamily: "Comic Sans MS",
};

const backButton = {
  fontSize: "45px",
  borderRadius: "20px",
  borderWidth: "3px",
  fontFamily: "Comic Sans MS",
};

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
                      <div className="border" style={oval}></div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                      </div>
                      <div
                        className="border mb-5 hstack flex-wrap"
                        style={circle}
                      >
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto"
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
