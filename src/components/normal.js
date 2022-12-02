import React, { Component } from "react";
import Board from "./board.png";

const background1 = {
  backgroundColor: "#C2D9F7",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
};

const background2 = {
  backgroundImage: `url(${Board})`,
  marginTop: "200px",
  borderRadius: "30px",
};

const oval = {
  height: "400px",
  width: "190px",
  backgroundImage: `url(${Board})`,
  borderRadius: "40px",
};

const circle = {
  height: "174px",
  width: "105px",
  backgroundImage: `url(${Board})`,
  borderRadius: "35px",
};
class Normal extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" style={background1}>
        <div className="card w-100 mx-auto" style={background2}>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="border" style={oval}></div>
              </div>
              <div className="col my-auto">
                <div className="border mb-5" style={circle}></div>
                <div className="border mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="border mb-5" style={circle}></div>
                <div className="border mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="border mb-5" style={circle}></div>
                <div className="border mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="border mb-5" style={circle}></div>
                <div className="border mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="border mb-5" style={circle}></div>
                <div className="border mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="border mb-5" style={circle}></div>
                <div className="border mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="border mb-5" style={circle}></div>
                <div className="border mt-5" style={circle}></div>
              </div>
              <div className="col">
                <div className="border" style={oval}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Normal;
