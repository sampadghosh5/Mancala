import { elementAcceptingRef } from "@mui/utils";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import Board from "./board.png";
import Marble1 from "./marble1.png";
import { pits } from "./board.js";

const background1 = {
  backgroundColor: "#C2D9F7",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  fontFamily: "Comic Sans MS",
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
};

const circle = {
  height: "100px",
  maxWidth: "85px",
  backgroundImage: `url(${Board})`,
  borderRadius: "35px",
  textAlignVertical: "center",
  textAlign: "center",
};

const text = {
  fontFamily: "Comic Sans MS",
};

const backButton = {
  fontSize: "45px",
  borderRadius: "20px",
  borderWidth: "3px",
  fontFamily: "Comic Sans MS",
};
const hidden = {
  display:"none",
}
{
  /*comment*/
}
class BoardTest extends Component {
  state = {};
  render() {
    function changeBackground(e) {
      e.target.style.background = "red";
    }
    function resetBackground(e) {
        e.target.style.background = '';
      }
      function settogglable() {
        var foo = document.getElementById("1");
        foo.addEventListener('mouseenter',changeBackground);
        foo.addEventListener('mouseleave',resetBackground);
      }
      function setuntogglable() {
        var foo = document.getElementById("1");
        foo.removeEventListener('mouseenter',changeBackground);
        foo.removeEventListener('mouseleave',resetBackground);
      }
    function changeText(e){
        e.target.innerHTML="";
    }
    function update() {
      for (let i = 0; i < 14; i++) {
        console.log("setting id " + i + " to " + pits[i]);
        document.getElementById(i).innerHTML = pits[i];
      }
    }
    function set() {
      printBoard();
      pits[1] = 1;
      pits[0] = 5;
      pits[7] = 4;
      printBoard();
    }
    function printBoard() {
      console.log(pits[13], pits[12], pits[11], pits[10], pits[9], pits[8]);
      console.log(pits[1], pits[2], pits[3], pits[4], pits[5], pits[6]);
    }
    function ding() {
      document.getElementById("ding").style.display = "none";
      document.getElementById("win").style.display = "block";
    }

    function endAlert() {
      alert("You've won the game!");
    } 


    return (
      
      <div className="container-fluid" style={background1}>
        
        <div id="win" className="container-fluid background1" style={hidden}>
            <div className="row text">
              <div className="col">
                <h1 className="my-5 text-center header">CONGRATULATIONS!</h1>
              </div>
            </div>
            <div className="row text text-center">
              <div className="col mx-5">
                <h2 className="my-4">You have won the game!</h2>
                <img
                  src={Image}
                  class="rounded mx-auto d-block"
                  alt="This won't display"
                ></img>
              </div>
            </div>
            <div className="row my-5 text">
              <div className="col text-center">
                <Link to="/">
                  <button className="btn btn-outline-dark btn-lg mx-auto backButton">
                    Try again
                  </button>
                </Link>
              </div>
            </div>
          </div>


        
        <div id = "ding" className="row" style={text}>
          <div className="col">
            <div className="container-fluid">
              <div className="card w-75 mx-auto" style={background2}>
                <div className="card-body">
                  <div className="row mt-4">
                    {/*Pot 1*/}
                    <div className="col">
                      <div id="0" className="border" style={oval}></div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="13"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                      <div
                        id="1"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="12"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                      <div
                        id="2"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="11"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                      <div
                        id="3"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="10"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                      <div
                        id="4"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="9"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                      <div
                        id="5"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                    </div>
                    <div className="col my-auto">
                      <div
                        id="8"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                      <div
                        id="6"
                        className="border d-flex align-items-center mb-5"
                        style={circle}
                      >
                        <h5 className="mx-auto">1</h5>
                      </div>
                    </div>
                    {/*Pot 2*/}
                    <div className="col">
                      <div id="7" className="border" style={oval}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn" onClick={update}>
          update
        </div>
        <div className="btn" onClick={set}>
          set
        </div>
        <div className="btn" onClick={settogglable}>
          set togglable
        </div>
        <div className="btn" onClick={setuntogglable}>
          set untogglable
        </div>
        <div className="btn" onClick={ding}>
          hide
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

export default BoardTest;
