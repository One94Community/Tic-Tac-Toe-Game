const boxs = document.querySelectorAll(".box");
const winer = document.querySelector(".winer");
const drowMsg = document.querySelector('.draw-message');

let playerTurn = true;
let countToDrow = 0
if(playerTurn === true){
  
}
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerTurn == true) {
      box.innerText = "X";
      box.classList.add("textColorGreen");
      playerTurn = false;
    } else {
      box.innerText = "O";
      box.classList.add("textColorRed")
      playerTurn = true;
    }
    box.disabled = true;
    countToDrow++;
    checkWindr();
    checkDrow();
  });
});
const checkWindr = () => {
  const winPartens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let winParten of winPartens) {
    let pos1Valu = boxs[winParten[0]].innerText;
    let pos2Valu = boxs[winParten[1]].innerText;
    let pos3Valu = boxs[winParten[2]].innerText;

    if (pos1Valu != "" && pos2Valu != "" && pos3Valu != "") {
      if (pos1Valu === pos2Valu && pos2Valu === pos3Valu) {
        showWinner(pos1Valu);
        return;
      }
    }
  }
};

const showWinner = (val) => {
  winer.classList.remove("hide");
  winer.classList.add("bgGreen")
  winer.innerText = `Winner is ${val}`;
  disableBox();
};
const disableBox = () => {
  boxs.forEach((box) => {
    box.disabled = true;
  });
};

const checkDrow = ()=>{
  if(countToDrow === 9 && !winer.classList.contains('hide')){
    return
  }
  if(countToDrow === 9){
    drowMsg.classList.remove('hide')
    drowMsg.classList.add('bgRed')
  }
}

const resetButton = document.querySelector("#resetButten");
resetButton.addEventListener("click", () => {
  location.reload();
});
