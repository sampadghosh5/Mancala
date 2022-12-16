//@ts-check

// @ts-ignore
import SelectInput from "@mui/material/Select/SelectInput";
import { getAImove } from "./maximin.js";
import {Player} from './player.js';

let pits = Array(14).fill(3);
pits[0] = 0;
pits[7] = 0;
const AI = true;
const difficulty = 3;

const player1 = new Player(0);
const player2 = new Player(7);
player1.setTurn();

function endgame() {
    console.log("Game over!");
    if(pits[7] > pits[0]){
        // @ts-ignore
        document.getElementById("player").innerText = "Red Wins!!";
        // @ts-ignore
        document.getElementById("player").style.color = "red";
    }
    else{
        // @ts-ignore
        document.getElementById("player").innerText = "Blue Wins!!";
        // @ts-ignore
        document.getElementById("player").style.color = "blue";
    }
}

function newgame(){
    pits = Array(14).fill(3);
    pits[0] = 0;
    pits[7] = 0;
    player1.setTurn();
    p1Turn();
}


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function flash(i, color){
    // @ts-ignore
    document.getElementById(i).style.color = color;
    
    await sleep(500);
    // @ts-ignore
    setTimeout(document.getElementById(i).style.color = "", 100);
}

/**
 * @param {Array} c_pits
 * @param {any} index
 */
function updateBoard(c_pits, index /* index of pit */) {
    /* needs to check for which player */
    let i = index;
    let new_pits = c_pits.slice();
    let carry = new_pits[i];
    if (carry > 0) new_pits[i] = 0;
    i++;
    while(carry > 0) {
       if(i === 14)  i = 0;
       
       {/*flash color*/}
       // skip over other player's pot
       if((player1.isnext) && (i == 0)){ carry++}
       else if((player2.isnext) && (i == 7)){ carry++}
       else{
            c_pits[i] += 1;
            //console.log(i + " has " + c_pits[i]);
            flash(i, "#9cf7e4");
       }
       
       
       carry--;
       i++;
       //await sleep (100);
    }
    i--;
    // if the last marble fell in a home pot, the player gets another turn.
    if(i==0 || i ==7){
        player1.setTurn();
        player2.setTurn();
    }
    // if we end in an empty pot, steal from opposite
    else if(pits[i]==1){
        let opposite = 14-i;
        if(player1.isnext){
            pits[7] += pits[opposite];
        }
        else if(player2.isnext){
            pits[0] += pits[opposite];
        }
        pits[opposite] = 0;
        flash(opposite, "yellow");
    }
    
    return new_pits;
}

/**
 * @param {any} index
 */
function pit_click(index) {
    if(player1.isnext) {
        if(player1.valid_moves(pits).includes(index)) {
            pits = updateBoard(pits, index);
            player1.updatetotal(pits);
            player2.updatetotal(pits);
            if(player2.valid_moves(pits).length > 0) {
                if(AI) {
                    console.log("AI baby");
                    pits = updateBoard(pits, getAImove(player2, pits, difficulty))
                    player1.updatetotal(pits);
                    player2.updatetotal(pits);
                    return;
                }
                player1.setTurn();
                player2.setTurn();
            }  else if (player1.valid_moves(pits).length === 0){
                endgame();
            }
        }
    } else if (player2.isnext) {
        if(player2.valid_moves(pits).includes(index)){
            updateBoard(pits, index);
            player2.updatetotal(pits);
            player1.updatetotal(pits);
            if(player1.valid_moves(pits).length > 0) {
                player1.setTurn();
                player2.setTurn();
            } else if (player2.valid_moves(pits).length === 0){
                endgame();
            }
        }
    } else {
    }
    if(player1.isnext) p1Turn();
    else if(player2.isnext) p2Turn();
}

//cosmetic functions
// @ts-ignore
function changeBackgroundP1(e) {
    e.target.style.background = "red";
}
// @ts-ignore
function changeBackgroundP2(e) {
    e.target.style.background = "blue";
}
function resetBackground(e) {
    e.target.style.background = '';
}
// @ts-ignore
function settogglable(id, player) {
    var pot = document.getElementById(id);
    if(player == 1){
        // @ts-ignore
        pot.addEventListener('mouseenter',changeBackgroundP1);
    }
    else{
        // @ts-ignore
        pot.addEventListener('mouseenter',changeBackgroundP2);
    }
    
    // @ts-ignore
    pot.addEventListener('mouseleave',resetBackground);
}
// @ts-ignore
function setuntogglable(id) {
    var pot = document.getElementById(id);
    // @ts-ignore
    pot.removeEventListener('mouseenter',changeBackgroundP1);
    // @ts-ignore
    pot.removeEventListener('mouseenter',changeBackgroundP2);
    // @ts-ignore
    //foo.removeEventListener('mouseleave',resetBackground);
}

function p1Turn(){
    for(var n = 1; n < 7; n++){
        settogglable(n, 1);
        setuntogglable(14-n);
    }
    
    // @ts-ignore
    document.getElementById("player").innerText = "Red's Turn";
    // @ts-ignore
    document.getElementById("player").style.color = "red";
}

function p2Turn(){
    for(var n = 13; n > 6; n--){
        settogglable(n, 2);
        setuntogglable(14-n);
    }
    // @ts-ignore
    document.getElementById("player").innerText = "Blue's Turn";
    // @ts-ignore
    document.getElementById("player").style.color = "blue";
}


export { pits , updateBoard, pit_click, newgame, player1, player2};

