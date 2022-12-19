//@ts-check

// @ts-ignore

import { getAImove } from "./maximin.js";
import { Player } from "./player.js";
import { geteasyAImove } from "./easyAI.js";

//initialization of the board
let pits = Array(14).fill(3);
pits[0] = 0;
pits[7] = 0;
let AI = true;

//end_on_homepit is used to give players a extra turn if they land on homepit, gameover is end execution conditional
let end_on_homepit = false;
let game_over = false;

//this code is for switching between minimax ai, or random easy ai
let whichAI = 1;
let randomized = false;
/**
 * @param {boolean} random
 */
function useEasyAI(random) {
  whichAI = 2;
  randomized = random;
  return;
}

function useminimax() {
  whichAI = 1;
  return;
}

//difficulty = recursion depth for minimax algorithm
let difficulty = 9;
/**
 * @param {number} newDifficulty
 */
function setDifficulty(newDifficulty) {
  difficulty = newDifficulty;
}

const player1 = new Player(7);
const player2 = new Player(0);
player1.setTurn();

function endgame() {
  console.log("Game over!");
  game_over = true;
  for (let i = 1; i < 14; i++) {
    if (i === player1.homepit) {
      continue;
    }
    console.log(
      "Pit: " +
        i +
        ". Player1's pit: " +
        player1.ismypit(pits, i) +
        ". Player2's pit: " +
        player2.ismypit(pits, i) +
        "."
    );
    if (player1.ismypit(pits, i)) {
      pits[player1.homepit] += pits[i];
      pits[i] = 0;
    }

    if (player2.ismypit(pits, i)) {
      pits[player2.homepit] += pits[i];
      pits[i] = 0;
    }
  }
  // @ts-ignore
  // document.getElementById("game").style.display = "none";
  // @ts-ignore
  document.getElementById("backButton").innerText = "Try Again";
  if (pits[player1.homepit] > pits[player2.homepit]) {
    //Red has won!
    // @ts-ignore
    document.getElementById("player").innerText = "Red Wins!!";
    // @ts-ignore
    document.getElementById("player").style.color = "red";
    // @ts-ignore
    // document.getElementById("win").src = "/static/media/win.4f08588f34e6c5873b9d.png";
  } else if (pits[player1.homepit] < pits[player2.homepit]) {
    //Blue has won!
    // @ts-ignore
    document.getElementById("player").innerText = "Blue Wins!!";
    // @ts-ignore
    document.getElementById("player").style.color = "blue";
    // @ts-ignore
    // document.getElementById("lose").src = "/static/media/lose.89c7dd3d7e3806d71567.png";
  } else if (pits[player1.homepit] === pits[player2.homepit]) {
    //It's a draw!
    // @ts-ignore
    document.getElementById("player").innerText = "It's a Draw";
    // @ts-ignore
    document.getElementById("player").style.color = "yellow";
    // @ts-ignore
    // document.getElementById("lose").src = "/static/media/lose.89c7dd3d7e3806d71567.png";
  }
}

function newgame(e) {
  pits = Array(14).fill(3);
  pits[0] = 0;
  pits[7] = 0;
  game_over = false;
  end_on_homepit = false;
  if (!player1.isnext) {
    player1.setTurn();
    player2.setTurn();
  }
  p1Turn();
  //console.log("new game")
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function flash(i, color) {
  // @ts-ignore
  document.getElementById(i).style.color = color;

  await sleep(500);
  // @ts-ignore
  setTimeout((document.getElementById(i).style.color = ""), 100);
}

/**
 * @param {Array} c_pits
 * @param {any} index
 * @param {import("./player.js").Player} player
 */
function updateBoard(c_pits, index, player) {
  let i = index;
  let new_pits = c_pits.slice();
  //console.log(new_pits);
  let carry = new_pits[i];
  if (carry > 0) new_pits[i] = 0;
  i++;
  while (carry > 0) {
    if (i === 14) i = 0;

    {
      /*flash color*/
    }
    // skip over other player's pot
    if (player === player1 && i === player2.homepit) {
      carry++;
    } else if (player === player2 && i === player1.homepit) {
      carry++;
    } else {
      new_pits[i] += 1;
      //console.log(i + " has " + c_pits[i]);
      flash(i, "#9cf7e4");
    }

    carry--;
    i++;
    //await sleep (100);
  }
  i--;
  // if the last marble fell in a home pot, the player gets another turn.
  if (i == player.homepit) {
    console.log("Homepit!");
    end_on_homepit = true;
  }
  // if we end in an empty pot, steal from opposite
  else if (new_pits[i] == 1 && player.ismypit(new_pits, i)) {
    let opposite = 14 - i;
    new_pits[player.homepit] += new_pits[opposite];
    new_pits[opposite] = 0;
    flash(opposite, "yellow");
  }

  return new_pits;
}

/**
 * @param {any} index
 */
function pit_click(index) {
  if (game_over) return;
  if (
    player1.valid_moves(pits).length === 0 ||
    player2.valid_moves(pits).length === 0
  ) {
    endgame();
    return;
  }
  if (player1.isnext) {
    if (player1.valid_moves(pits).length === 0) {
      player1.setTurn();
      player2.setTurn();
    } else if (player1.valid_moves(pits).includes(index)) {
      pits = updateBoard(pits, index, player1);
      if (end_on_homepit) {
        end_on_homepit = !end_on_homepit;
        return;
      }
      player1.updatetotal(pits);
      player2.updatetotal(pits);
      if (player2.valid_moves(pits).length > 0) {
        player1.setTurn();
        player2.setTurn();
        if (AI) playAImove();
      } else if (player1.valid_moves(pits).length === 0) {
        endgame();
        return;
      }
    }
  } else if (player2.isnext) {
    if (player2.valid_moves(pits).length === 0) {
      player1.setTurn();
      player2.setTurn();
    } else if (player2.valid_moves(pits).includes(index)) {
      pits = updateBoard(pits, index, player2);
      if (end_on_homepit) {
        end_on_homepit = !end_on_homepit;
        return;
      }
      player2.updatetotal(pits);
      player1.updatetotal(pits);
      if (player1.valid_moves(pits).length > 0) {
        player1.setTurn();
        player2.setTurn();
      } else if (player2.valid_moves(pits).length === 0) {
        endgame();
        return;
      }
    }
  } else {
  }
  if (!game_over) {
    if (player1.isnext) p1Turn();
    else if (player2.isnext) p2Turn();
  }
}

/** function called on load to enable/disable AI functionality
 * @param {boolean} yes
 */
function setAI(yes) {
  AI = yes;
}

function playAImove() {
  while (player2.isnext && !game_over) {
    if (whichAI === 1) {
      //console.log("Minimax used.")
      pit_click(getAImove(player2, pits, difficulty));
    } else {
      //console.log("Easy AI used.");
      pit_click(geteasyAImove(pits, player2, randomized));
    }
    if (end_on_homepit) {
      end_on_homepit = !end_on_homepit;
      return;
    }
  }
}

//cosmetic functions

// functions for changing pit backgrounds on hover to designate valid moves
function changeBackgroundP1(e) {
  e.target.style.background = "red";
}
function changeBackgroundP2(e) {
  e.target.style.background = "blue";
}
function resetBackground(e) {
  e.target.style.background = "";
}

// Sets pot to have mouseover function
function settogglable(id, player) {
  var pot = document.getElementById(id);
  if (player == 1) {
    // @ts-ignore
    pot.addEventListener("mouseenter", changeBackgroundP1);
  } else {
    // @ts-ignore
    pot.addEventListener("mouseenter", changeBackgroundP2);
  }
  // @ts-ignore
  pot.addEventListener("mouseleave", resetBackground);
}
// Resets mouseover function
function setuntogglable(id) {
  var pot = document.getElementById(id);
  // @ts-ignore
  pot.removeEventListener("mouseenter", changeBackgroundP1);
  // @ts-ignore
  pot.removeEventListener("mouseenter", changeBackgroundP2);
  // @ts-ignore
  //foo.removeEventListener('mouseleave',resetBackground);
}

// sets up mouseover for red/player 1
function p1Turn() {
  if (game_over) console.trace();
  for (var n = 1; n < 7; n++) {
    settogglable(n, 1);
    setuntogglable(14 - n);
  }

  // @ts-ignore
  document.getElementById("player").innerText = "Red's Turn";
  // @ts-ignore
  document.getElementById("player").style.color = "red";
}

// sets up mouseover for blue/player 2
function p2Turn() {
  if (game_over) console.trace();
  for (var n = 13; n > 6; n--) {
    settogglable(n, 2);
    setuntogglable(14 - n);
  }
  // @ts-ignore
  document.getElementById("player").innerText = "Blue's Turn";
  // @ts-ignore
  document.getElementById("player").style.color = "blue";
}

export {
  pits,
  updateBoard,
  pit_click,
  newgame,
  player1,
  player2,
  setAI,
  setDifficulty,
  useEasyAI,
  useminimax,
};
