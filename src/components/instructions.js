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

const text2 = {
  fontFamily: "Comfortaa",
};
const header = {
  fontSize: "75px",
};

const backButton = {
  fontSize: "45px",
  borderRadius: "20px",
  borderWidth: "3px",
};

class Instructions extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" style={background1}>
        <div className="row" style={text}>
          <div className="col">
            <h1 className="my-5 text-center" style={header}>
              Rules of the Game:
            </h1>
          </div>
        </div>
        <div className="row" style={text2}>
          <div className="col mx-5">
            <h2 className="my-4">
              1. If you run into your own store, deposit one piece in it. Skip
              your opponent's store.
            </h2>
            <h2 className="my-4">
              2. If the last piece you drop is in your own store, you get a free
              turn.
            </h2>
            <h2 className="my-4">
              3. If the last piece you drop is in an empty hole on your side,
              you capture that piece and any pieces in the hole directly
              opposite.
            </h2>
          </div>
        </div>
        <div className="row my-5" style={text}>
          <div className="col text-center">
            <button
              className="btn btn-outline-primary btn-lg mx-auto"
              style={backButton}
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
