function solve(input) {
  let age = Number(input[0]);
  let neededMoney = Number(input[1]);
  let toyPrice = Number(input[2]);
  let savedMoney = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      savedMoney += i * 5;
      savedMoney--;
    } else {
      savedMoney += toyPrice;
    }
  }
  let diff = Math.abs(savedMoney - neededMoney);
  if (savedMoney >= neededMoney) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}
solve(["10", "170", "6"]);
solve(["21", "1570.98", "3"]);
