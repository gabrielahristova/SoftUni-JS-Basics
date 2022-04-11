function solve(input) {
  let targetNum = Number(input[0]);
  let currentNum = 0;
  let isEqueal = false;
  for (let rows = 1; rows <= targetNum; rows++) {
    let printLine = "";
    for (let cols = 1; cols <= rows; cols++) {
      currentNum++;
      printLine += currentNum + " ";
      if (currentNum === targetNum) {
        isEqueal = true;
        break;
      }
    }
    console.log(printLine);
    if (isEqueal) {
      break;
    }
  }
}
solve(["15"]);
