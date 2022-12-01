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

class Start extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" style={background1}>
        <div className="row" style={text}>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Start;
