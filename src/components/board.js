<<<<<<< HEAD
let pits;
pits = Array(14).fill(3);
=======
//@ts-check

let pits = Array(14).fill(3);
>>>>>>> 0d0b8a724696ea7591644b35d62f238c060b7c9e
pits[0] = 0;
pits[7] = 0;

let i = 0;
function updateBoard(index /* index of pit */) {
<<<<<<< HEAD
  let pits_copy;
  pits_copy = pits.slice();
  let carry;
  carry = pits_copy[i];
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
=======
    /* needs to check for which player */
    let i = index;
    let pits_copy = pits.slice();
    let carry = pits_copy[i];
    pits_copy[i] = 0;
    i++;
    while(carry > 0) {
       pits_copy[i] += 1;
       carry--;
       i++;
       if(i === 14)  i = 0;
    }
    return pits_copy;
}

export { pits , updateBoard};

>>>>>>> 0d0b8a724696ea7591644b35d62f238c060b7c9e
