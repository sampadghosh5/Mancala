let pits;
pits = Array(14).fill(3);
pits[0] = 0;
pits[7] = 0;

let i = 0;
function updateBoard(index /* index of pit */) {
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
