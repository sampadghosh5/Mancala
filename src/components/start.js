import React, { Component } from "react";

const background1 = {
  backgroundColor: "#C2D9F7",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
};

const text = {
  fontFamily: "bubblegums",
};

const header = {
  fontSize: "75px",
};

const button = {
  fontSize: "45px",
  borderRadius: "10px",
  borderWidth: "3px",
};

class Start extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" style={background1}>
        <div className="row" style={text}>
          <div className="col">
            <h1 className="mt-5 text-center" style={header}>
              Let's Play!
            </h1>
          </div>
        </div>
        <div className="row my-5" style={text}>
          <div className="col text-center">
            <button className="btn btn-success btn-lg mx-auto" style={button}>
              NORMAL
            </button>
          </div>
        </div>
        <div className="row my-5" style={text}>
          <div className="col text-center">
            <button className="btn btn-danger btn-lg mx-auto" style={button}>
              EXTREME
            </button>
          </div>
        </div>
        <div className="row my-5" style={text}>
          <div className="col text-center">
            <button className="btn btn-primary btn-lg mx-auto" style={button}>
              MULTIPLAYER
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Start;