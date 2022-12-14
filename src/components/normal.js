import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Board from "./board.png";
import Marble1 from "./marble1.png";
import { pits, updateBoard } from "./board.js";

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
  textAlignVertical: "center", 
  textAlign: "center",
  paddingTop: "110px"
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

const backButton = {
  fontSize: "45px",
  borderRadius: "20px",
  borderWidth: "3px",
  fontFamily: "Regular",
};

class Normal extends Component {
  state = {
    counter: 0
  }

  handleClick(i) {
    updateBoard(pits, i);
    this.setState({counter: this.counter + 1});
  }

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
                      <div id ="0" className="border align-items-center" style={oval}>
                      <h5 className="mx-auto">{pits[0]}</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div 
                        id = "13"
                        onClick={() => this.handleClick(13)}
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
                      <div  id = "1"
                         onClick={() => this.handleClick(1)}
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
                    <div  className="col my-auto">
                      <div id = "12" onClick={() => this.handleClick(12)}
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
                      <div  id = "2" onClick={() => this.handleClick(2)}
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
                      <div  id = "11" onClick={() => this.handleClick(11)}
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
                      <div  id = "3" onClick={() => this.handleClick(3)}
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
                      <div  id = "10" onClick={() => this.handleClick(10)}
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
                      <div  id = "4" onClick={() => this.handleClick(4)}
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
                      <div  id = "9" onClick={() => this.handleClick(9)}
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
                      <div  id = "5" onClick={() => this.handleClick(5)}
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
                      <div  id = "8" onClick={() => this.handleClick(8)}
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
                      <div  id = "6" onClick={() => this.handleClick(6)}
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
                    <div className="col">
                      <div  id = "7" className="border" style={oval}>
                      <h5 className="mx-auto">{pits[7]}</h5>
                      </div>
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
