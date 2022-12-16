//@ts-check

import {player1, player2} from './board.js';

/**
 * @param {Array} c_pits
 * @param {any} index
 * @param {import("./player.js").Player} player
 */
function update_pitsv2(c_pits, index, player) {
    let nplayer = nextplayer(player);
    let i = index;
    let new_pits = Array();
    new_pits = [c_pits.slice()];
    let carry = new_pits[i];
    if (carry > 0) new_pits[i] = 0;
    i++;
    while(carry > 0) {
       if(i === 14)  i = 0;
       
       /*flash color*/
       // skip over other player's pot
       if(player === player1 && i === player2.homepit) {carry++}
       else if(player === player2 && i === player1.homepit) {carry++}
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
        // TODO: add functionality!
    }
    // if we end in an empty pot, steal from opposite
    else if(new_pits[i] === 1 && player.ismypit(new_pits, i)){
        let opposite = 14-i;
        new_pits[player.homepit] += new_pits[opposite];
        new_pits[opposite] = 0;
    }

    new_pits.push(nplayer);
    //console.log(new_pits);  
    return new_pits;
}

/**
 * @param {Array} c_pits
 * @param {import("./player.js").Player} player
 */
function gameover(c_pits, player) {
    return (player.valid_moves(c_pits).length === 0);
}

/**
 * @param {Array} c_pits
 * @param {import("./player.js").Player} player
 */
function evalplayer(c_pits, player) {
    let total = c_pits[player.homepit];
    const lastpit = (player.homepit === 0) ? 14 : player.homepit;
    for(let i = (lastpit - 1); i > (lastpit - 7); i--) {
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
 * @param {any} c_pits
 * @param {any} player
 */
function evalpitsv2(c_pits, player) {
    if (c_pits[player.homepit] >= 18) return Infinity;
    const opponent = nextplayer(player);
    if (c_pits[opponent.homepit] >= 18) return -Infinity;
    let  h1 = c_pits[player.homepit] - c_pits[opponent.homepit];
    const h2 = (c_pits[player.homepit] - 18);
    let h3 = (c_pits[opponent.homepit] - 18);
    let opp_gain = 0;
    if(gameover(c_pits, player)) {
        const lastpit = (opponent.homepit === 0) ? 14 : opponent.homepit;
        for(let i = (lastpit - 1); i > (lastpit - 7); i--) {
            if(c_pits[i] > 0) {
                opp_gain += c_pits[i];
            }
        }

        h1 = c_pits[player.homepit] - c_pits[opponent.homepit] - opp_gain;
        h3 = (c_pits[opponent.homepit] + opp_gain - 18);
    }

    return ((50*h1)+(20*h2)-(1000*h3));
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
    if (depth === -1 || gameover(c_pits, player)) {
        return [null, evalpitsv2(c_pits, player)];
    }

    //get all valid moves for current player
    const valid_moves = player.valid_moves(c_pits);


    //This is the move to beat with recursion
    let bestcase = Array();
    bestcase = [valid_moves[0], evalpitsv2(c_pits, player)];


    for(let i = 0; i < valid_moves.length; i++) {
        //our pits after our move
        let new_pits = update_pitsv2(c_pits, valid_moves[i], player);

        if (new_pits[1] === player) {
            maximizing = !maximizing;
        }
        
        const nextScore = maxiMin(new_pits[1], new_pits[0], depth - 1, !maximizing);

        if (new_pits[1] === player) {
            maximizing = !maximizing;
        }
        
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
function getAImove(player, c_pits, depth) {
    return maxiMin(player, c_pits, depth, true)[0];
}

export {getAImove};