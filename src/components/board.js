//@ts-check

import SelectInput from "@mui/material/Select/SelectInput";

let pits = Array(14).fill(3);
pits[0] = 0;
pits[7] = 0;

let isPlayer1 = true;

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function updateBoard(pits, index /* index of pit */) {
    /* needs to check for which player */
    let i = index;
    let carry = pits[i];
    if (carry > 0) pits[i] = 0;
    i++;
    while(carry > 0) {
       if(i === 14)  i = 0;
       // @ts-ignore
       document.getElementById(i).style.color = "#9cf7e4";
       pits[i] += 1;
       {/*flash color*/}
        
       await sleep(100);
       // @ts-ignore
       document.getElementById(i).style.color = ""; 
       carry--;
       i++;
       
       
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

