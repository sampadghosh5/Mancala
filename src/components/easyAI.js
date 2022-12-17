//@ts-check

/**
 * @param {Array} c_pits
 * @param {import("./player.js").Player} player
 * @param {boolean} random
 */ 
//retuns a random valid move or the first valid move, conditional on boolean random
function geteasyAImove(c_pits, player, random) {
    let validmoves = player.valid_moves(c_pits);
    let i = (random) ? (Math.floor(Math.random() * validmoves.length)) : 0;
    return validmoves[i];
}

export {geteasyAImove};