import React, { Component } from "react";
import Board from "./board.jpg";

const background1 = {
  backgroundColor: "#C2D9F7",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
};

const background2 = {
  backgroundColor: "#CFA76E",
  marginTop: "200px",
};

const oval = {
  height: "300px",
  width: "200px",
  backgroundColor: "#E2BF96",
  borderRadius: "40px",
};

const circle = {
  height: "110px",
  width: "103px",
  backgroundColor: "#E2BF96",
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
                <div style={oval}></div>
              </div>
              <div className="col my-auto">
                <div className="mb-5" style={circle}></div>
                <div className="mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="mb-5" style={circle}></div>
                <div className="mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="mb-5" style={circle}></div>
                <div className="mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="mb-5" style={circle}></div>
                <div className="mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="mb-5" style={circle}></div>
                <div className="mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="mb-5" style={circle}></div>
                <div className="mt-5" style={circle}></div>
              </div>
              <div className="col my-auto">
                <div className="mb-5" style={circle}></div>
                <div className="mt-5" style={circle}></div>
              </div>
              <div className="col">
                <div style={oval}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Normal;
