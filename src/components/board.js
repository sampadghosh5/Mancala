//@ts-check

let pits = Array(14).fill(3);
pits[0] = 0;
pits[7] = 0;

<<<<<<< HEAD
let isPlayer1 = true;

function updateBoard(pits, index /* index of pit */) {
    /* needs to check for which player */
    let i = index;
    let carry = pits[i];
    if (carry > 0) pits[i] = 0;
    i++;
    while(carry > 0) {
       pits[i] += 1;
       carry--;
       i++;
       if(i === 14)  i = 0;
    }
}

function handleClick(index) {
    if(isPlayer1) {
        if(index < 7 && index > 0) {
            updateBoard(pits, index)
        }
        return;
    } else {
        if(index < 14 && index > 7) {
            updateBoard(pits, index);
        }
        return;
    }
    return;
}

export { pits , updateBoard, handleClick};

=======
function updateBoard(index /* index of pit */) {
  /* needs to check for which player */
  let i = index;
  let pits_copy = pits.slice();
  let carry = pits_copy[i];
  pits_copy[i] = 0;
  i++;
  while (carry > 0) {
    pits_copy[i] += 1;
    carry--;
    i++;
    if (i === 14) i = 0;
  }
  return pits_copy;
}

export { pits, updateBoard };
>>>>>>> 8b12ebaf564829f2791490159b53e7c14dd56d69
