import React, { Component } from "react";
import image from "./image.png";

const background1 = {
  backgroundColor: "#C2D9F7",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
};

const imageDimensions = {
  width: "500px",
  height: "400px",
};

const text = {
  fontFamily: "bubblegums",
};

const startButton = {
  fontFamily: "bubblegums",
  fontSize: "45px",
  borderRadius: "25px",
};
class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" style={background1}>
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center" style={text}>
              Welcome to the Mancala Game!
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src={image}
              alt="Not loading"
              className="d-block mx-auto my-5"
              style={imageDimensions}
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              className="btn btn-success btn-lg mx-auto"
              style={startButton}
            >
              START
            </button>
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
