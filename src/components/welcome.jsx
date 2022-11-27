import React, { Component } from "react";
import image from "./image.jpg";

const background = {
  backgroundColor: "#741619",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
};
const cardBackground = {
  backgroundColor: "#891A1D",
};

const text = {
  fontFamily: "Adventuro",
};

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div style={background}>
        <div className="container my-4" style={text}>
          <div className="card text-warning mx-auto" style={cardBackground}>
            <div className="card-body m-4">
              <h1>Welcome to the Mancala Game!</h1>
              <hr></hr>
              <img
                src={image}
                alt="Not loading"
                className="w-100 rounded mx-auto d-block mt-4"
              />
              <hr></hr>
              <h2 className="my-4">
                Choose to play against the computer in three difficulty levels:
              </h2>
              <button className="btn btn-outline-light btn-block">Easy</button>
              <button className="btn btn-outline-light btn-block">
                Medium
              </button>
              <button className="btn btn-outline-light btn-block">
                Difficult
              </button>
              <hr></hr>
              <h2 className="my-4">Or choose to play against a friend:</h2>
              <button className="btn btn-outline-light btn-block">
                Multiplayer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
