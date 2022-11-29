import React, { Component } from "react";

const background1 = {
  backgroundColor: "#02577A",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
};

const text = {
  fontFamily: "Akrobat Black",
};

const header = {
  fontSize: "55px",
};

class Multiplayer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container-fluid" style={background1}>
          <div className="row" style={text}>
            <div className="col text-light mx-4 my-4">
              <h1 className="my-3" style={header}>
                Multiplayer Mode
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Multiplayer;
