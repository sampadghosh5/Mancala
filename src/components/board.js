//@ts-check

import SelectInput from "@mui/material/Select/SelectInput";
import {Player} from './player.js';

let pits = Array(14).fill(3);
pits[0] = 0;
pits[7] = 0;

const player1 = new Player(0);
const player2 = new Player(7);
player1.setTurn();

function endgame() {
    console.log("Game over!");
    // @ts-ignore
    //document.getElementById("win").classList.remove("hide");
    // @ts-ignore
    //document.getElementById("win").classList.add("show");
}


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function flash(i){
    // @ts-ignore
    document.getElementById(i).style.color = "#9cf7e4";
    
    await sleep(100);
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
    let carry = c_pits[i];
    if (carry > 0) c_pits[i] = 0;
    i++;
    while(carry > 0) {
       if(i === 14)  i = 0;
       
       {/*flash color*/}
       c_pits[i] += 1;
       console.log(i + " has " + c_pits[i]);
       flash(i);
       
       carry--;
       i++;
       //await sleep (100);
    }
    // if the last marble fell in a home pot, the player gets another turn.
    if(i==1 || i ==8){
        player1.setTurn();
        player2.setTurn();
    }
    
    return c_pits;
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
                player1.setTurn();
                player2.setTurn();
            }  else if (player1.valid_moves(pits).length === 0){
                endgame();
            }
        }
        return;
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
        return;
    } else {
        return;
    }
}

export { pits , updateBoard, pit_click, player1, player2};

