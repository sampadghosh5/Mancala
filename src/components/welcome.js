import React, { Component } from "react";
import Board from "./board.png";
import Marble1 from "./marble1.png";
import Marble2 from "./marble2.png";
import Marble3 from "./marble3.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const background1 = {
  backgroundColor: "#C2D9F7",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  fontFamily: "bubblegums",
};

const background2 = {
  backgroundImage: `url(${Board})`,
  marginTop: "50px",
  marginBottom: "50px",
  borderRadius: "30px",
};

const imageDimensions = {
  height: "35px",
  width: "35px",
};
const oval = {
  height: "250px",
  width: "150px",
  backgroundImage: `url(${Board})`,
  borderRadius: "40px",
};

const circle = {
  height: "100px",
  width: "85",
  backgroundImage: `url(${Board})`,
  borderRadius: "35px",
};

const text = {
  fontFamily: "bubblegums",
};

const header = {
  fontSize: "75px",
};

const startButton = {
  fontSize: "45px",
  borderRadius: "20px",
  borderWidth: "3px",
};

const instructionsButton = {
  fontSize: "35px",
  borderColor: "transparent",
  borderRadius: "20px",
};
class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" style={background1}>
        <h2 className="mt-5 text-center">Welcome to the... </h2>
        <h1 className="text-center mt-4" style={header}>
          Mancala Game!
        </h1>

        <div className="row" style={text}>
          <div className="col">
            <div className="container-fluid">
              <div className="card w-75 mx-auto" style={background2}>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="border" style={oval}></div>
                    </div>
                    <div className="col my-auto">
                      <div className="border mb-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                      <div className="border mt-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border mb-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                      <div className="border mt-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border mb-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                      <div className="border mt-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border mb-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                      <div className="border mt-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border mb-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                      <div className="border mt-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border mb-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                      <div className="border mt-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div className="border mb-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
                          style={imageDimensions}
                        />
                      </div>
                      <div className="border mt-5" style={circle}>
                        <img
                          src={Marble1}
                          alt="Not loading"
                          className="d-block mx-auto mt-2"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble2}
                          alt="Not loading"
                          className="d-block mx-auto float-start"
                          style={imageDimensions}
                        />
                        <img
                          src={Marble3}
                          alt="Not loading"
                          className="d-block mx-auto float-end"
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
        <div className="row" style={text}>
          <div className="col text-center">
            <Link to="/start">
              <button
                className="btn btn-outline-success btn-lg mx-auto"
                style={startButton}
              >
                START
              </button>
            </Link>
          </div>
        </div>
        <div className="row" style={text}>
          <div className="col text-center">
            <Link to="/instructions">
              <button
                className="btn btn-outline-dark btn-lg my-4"
                style={instructionsButton}
              >
                INSTRUCTIONS
              </button>
            </Link>
          </div>
        </div>
      </div>

      // <div>
      //   <div className="container-fluid" style={background1}>
      //     <div className="row" style={text}>
      //       <div className="col text-light mx-4 my-4">
      //         <div>
      //           <h1 className="my-3" style={header}>
      //             Welcome to the Mancala Game!
      //           </h1>
      //           {/* <hr className="mb-4 border-light"></hr> */}
      //           <img
      //             src={image}
      //             alt="Not loading"
      //             className="w-25 d-block mx-auto my-auto"
      //           />
      //         </div>
      //         <h2 className="mb-3">Rules of the Game:</h2>
      //         <h4>
      //           1. If you run into your own store, deposit one piece in it. Skip
      //           your opponent's store.
      //         </h4>
      //         <h4>
      //           2. If the last piece you drop is in your own store, you get a
      //           free turn.
      //         </h4>
      //         <h4>
      //           3. If the last piece you drop is in an empty hole on your side,
      //           you capture that piece and any pieces in the hole directly
      //           opposite.
      //         </h4>
      //         <h4>4. Always place all captured pieces in your store.</h4>
      //         <h2 className="my-4">
      //           Choose to play against the computer in three difficulty levels:
      //         </h2>
      //         <button className="btn btn-outline-light btn-block">Easy</button>
      //         <button className="btn btn-outline-light btn-block">
      //           Medium
      //         </button>
      //         <button className="btn btn-outline-light btn-block">
      //           Difficult
      //         </button>
      //         <h2 className="my-4">Or choose to play against a friend:</h2>
      //         <button className="btn btn-outline-light btn-block">
      //           Multiplayer
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Welcome;
