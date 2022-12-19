//@ts-check

class Player {
    /**
     * @param {number} home_pit_index
     */
    constructor(home_pit_index) {
        this.total = 0;
        this.isnext = false;
        this.homepit = home_pit_index;
    }

    /**
     * @param {Array} c_pits
     */
    valid_moves(c_pits) {
        let validmoves = [];
        const lastpit = (this.homepit === 0) ? 14 : this.homepit;
        for(let i = (lastpit - 1); i > (lastpit - 7); i--) {
            if(c_pits[i] > 0) {
                validmoves.push(i);
            }
        }
        return validmoves;
    }

    /**
     * @param {Array} c_pits
     */
    updatetotal(c_pits) {
        this.total = c_pits[this.homepit];
    }

    setTurn() {
        this.isnext = !this.isnext;
    }

    /**
     * @param {Array} c_pits
     * @param {number} i
     */
    ismypit(c_pits, i) {
        let mypits = [];
        const lastpit = (this.homepit === 0) ? 14 : this.homepit;
        for(let i = (lastpit - 1); i > (lastpit - 7); i--) {
            mypits.push(i);
        }
        return mypits.includes(i);
    }
}

export {Player};