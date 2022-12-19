//@ts-check

import {pits, player1, player2} from './board.js';

/**
 * @param {Array} c_pits
 * @param {any} index
 * @param {import("./player.js").Player} player
 */
//creates a pit structure based on a move, different from update board as it returns who goes next too.
//And removes animation components.
function update_pits(c_pits, index, player) {
    let nplayer = nextplayer(player);
    let i = index;
    let new_pits = c_pits.slice();
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

    let myReturn = Array();
    myReturn.push(new_pits);
    myReturn.push(nplayer);
    //console.log(new_pits);  
    return myReturn;
}

/**
 * @param {Array} c_pits
 * @param {import("./player.js").Player} player
 */
//checks if player has no more moves
function gameover(c_pits, player) {
    return (player.valid_moves(c_pits).length === 0);
}

/**
 * @param {Array} c_pits
 * @param {import("./player.js").Player} player
 */
/*primitive static evaluation function, returns the difference between the seeds player has
in their homepit vs how many opponent has in theirs */
function evalpits(c_pits, player) {
    if(c_pits[player.homepit] > 18) return Infinity;
    if(c_pits[nextplayer(player).homepit] > 18) return -Infinity;
    return (c_pits[player.homepit] - c_pits[nextplayer(player).homepit]);
}

/**
 * @param {import("./player.js").Player} player
 */
//returns the next player
function nextplayer(player) {
    let nextplayer = (player === player1) ? player2 : player1;
    return nextplayer;
}

/**
 * @param {any} c_pits
 * @param {any} player
 */

/*a weighted evaluation function, if there was enough time, we could have used machine learning to change the weights
but with randomised weights, it has moderate success */
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
            if(c_pits[i] > 0 && opponent.ismypit(c_pits, i)) {
                opp_gain += c_pits[i];
            }
        }

        h1 = c_pits[player.homepit] - c_pits[opponent.homepit] - opp_gain;
        h3 = (c_pits[opponent.homepit] + opp_gain - 18);
    }

    return ((100*h1)+(50*h2)-(200*h3));
}


//returns [ideal move, maximum minimum score following ideal score]
//Uses alpha-beta pruning to cut down on unnecessary recursions
/**
 * @param {import("./player.js").Player} player
 * @param {Array} c_pits
 * @param {number} depth
 * @param {boolean} maximizing
 */
function maxiMin(player, c_pits, depth, maximizing) {
    //if we have reached desired recursion depth or we have reached endgame scenario, we return
    if (depth === 0 || gameover(c_pits, player)) {
        return [null, evalpits(c_pits, player)];
    }

    //get all valid moves for current player
    const valid_moves = player.valid_moves(c_pits);


    //This is the move to beat with recursion
    let bestcase = Array();
    bestcase = [valid_moves[0], evalpits(c_pits, player)];

    //for every valid move,
    for(let i = 0; i < valid_moves.length; i++) {
        //create a new board after said move
        let new_pits = update_pits(c_pits, valid_moves[i], player);

        //if we get another turn, we want to maximize for the next recursion too
        if (new_pits[1] === player) {
            maximizing = !maximizing;
        }
        
        //Recurse on this board, with player as the next player
        const nextScore = maxiMin(new_pits[1], new_pits[0], depth - 1, !maximizing);

        //repeated turn, fixes maximizing for the following conditional statements
        if (new_pits[1] === player) {
            maximizing = !maximizing;
        }
        
        /*If we are maximizing and our new score is more than the best score we had found till,
        set best score to the new score we found and store the move it takes.
        Similarly, if we are minimizing and the new score we found is less than the one we had found till then,
        set best score to this new score.
        */

        if(maximizing && nextScore[1] >= bestcase[1]) {
            if(player2 !== player) {
                console.log("We are maximizing for the wrong player!")
            }
            bestcase = [valid_moves[i], nextScore[1]];
            /*alpha = Math.max(alpha, nextScore[1])
            if (beta <= alpha) {
                //console.log("pruned");
                break;
            } */
        } else if (!maximizing && nextScore[1] <= bestcase[1]) {
            if(player1 !== player) {
                console.log("We are minimizing for the wrong player!")
            }
            bestcase = [valid_moves[i], nextScore[1]];
            /*beta = Math.min(beta, nextScore[1]);
            if (beta <= alpha) {
                //console.log("pruned");
                break;
            } */
        }
    }

    return bestcase;
}

/**
 * @param {import("./player.js").Player} player
 * @param {Array} c_pits
 * @param {number} depth
 */

//gets move from maximin function and returns the index for the ideal move
function getAImove(player, c_pits, depth) {
    return maxiMin(player, c_pits, depth, true)[0];
}

export {getAImove};