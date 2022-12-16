//@ts-check

import {updateBoard, player1, player2} from './board.js';
import { Player } from './player.js';

/**
 * @param {Array} c_pits
 * @param {number} index
 * @param {import("./player.js").Player} player
 */
function update_pits(c_pits, index, player) {
    let nplayer = nextplayer(player);
    let i = index;
    let new_pits = Array();
    new_pits = [c_pits.slice()];
    let carry = new_pits[i];
    if (carry > 0) new_pits[i] = 0;
    i++;
    while(carry > 0) {
       if(i === 14)  i = 0;
       
       {/*flash color*/}
       // skip over other player's pot
       if((player1.isnext) && (i == 0)){ continue;}
       else if((player2.isnext) && (i == 7)){continue;}
       else{
            new_pits[i] += 1;
       }       
       carry--;
       i++;
       //await sleep (100);
    }
    i--;
    // if the last marble fell in a home pot, the player gets another turn.
    if(i === player.homepit){
        nplayer = player;
    }
    // if we end in an empty pot, steal from opposite
    else if(new_pits[i]==1){
        let opposite = 14-i;
        new_pits[player.homepit] += new_pits[opposite];
        new_pits[opposite] = 0;
    }
    
    new_pits.push(nplayer);

    return new_pits;
}

/**
 * @param {import("./player.js").Player} player
 */
function gameover(player) {
    return (player.valid_moves.length === 0);
}

/**
 * @param {Array} c_pits
 * @param {import("./player.js").Player} player
 */
function evalplayer(c_pits, player) {
    let total = c_pits[player.homepit];
    for(let i = player.homepit + 1; i < (player.homepit + 7); i++) {
        total += c_pits[i];
    }
    return total;
}

/**
 * @param {import("./player.js").Player} player
 */
function nextplayer(player) {
    let nextplayer = (player === player1) ? player2 : player1;
    return nextplayer;
}

/**
 * @param {Array} c_pits
 * @param {import("./player.js").Player} player
 */
function evalpits(c_pits, player) {
    return (evalplayer(c_pits, player) - evalplayer(c_pits, nextplayer(player)));
}

//returns [ideal move, maximum minimum score following ideal score]
/**
 * @param {import("./player.js").Player} player
 * @param {Array} c_pits
 * @param {number} depth
 * @param {boolean} maximizing
 */
function maxiMin(player, c_pits, depth, maximizing) {
    //if we have reached desired recursion depth or we have reached endgame scenario, we return
    if (depth === 0 || gameover(player)) {
        return [null, evalpits(c_pits, player)];
    }

    //get all valid moves for current player
    const valid_moves = player.valid_moves(c_pits);
    let worstscore;
    if (maximizing) {
        worstscore = -Infinity;
    } else {
        worstscore = Infinity;
    }

    //This is the move to beat with recursion
    let bestcase = Array();
    bestcase = [valid_moves[0], worstscore];


    for(let i = 0; i < valid_moves.length; i++) {
        //our pits after our move
        let new_pits = update_pits(c_pits, c_pits[i], player);

        if (new_pits[1] === player) {
            maximizing = !maximizing;
        }
        
        const nextScore = maxiMin(new_pits[1], new_pits[0], depth - 1, !maximizing);
        
        if(maximizing && nextScore[1] >= bestcase[1]) {
            bestcase = [valid_moves[i], nextScore[1]];
        } else if (!maximizing && nextScore[1] <= bestcase[1]) {
            bestcase = [valid_moves[i], nextScore[1]];
        }
    }

    return bestcase;
}

/**
 * @param {import("./player.js").Player} player
 * @param {Array} c_pits
 * @param {number} depth
 */
function getAImove(player, c_pits, depth = 2) {
    return maxiMin(player, c_pits, depth, true)[0];
}

export {getAImove};