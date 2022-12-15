//@ts-check

import {pits} from "./board.js";

class Player {
    constructor(home_pit_index) {
        this.total = 0;
        this.isnext = false;
        this.homepit = home_pit_index;
    }

    get valid_moves() {
        let validmoves = [];
        for(let i = this.homepit + 1; i < (this.homepit + 7); i++) {
            if(pits[i] > 0) {
                validmoves.push(i);
            }
        }
        return validmoves;
    }

    updatetotal() {
        this.total = pits[this.homepit];
    }

    setTurn() {
        this.isnext = !this.isnext;
    }
}

export {Player};