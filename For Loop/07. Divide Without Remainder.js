function solve(input) {
  let number = Number(input.shift());
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  for (let i = 0; i < number; i++) {
    let currentNum = Number(input.shift());
    if (currentNum % 2 == 0) {
      p1++;
    }
    if (currentNum % 3 == 0) {
      p2++;
    }
    if (currentNum % 4 == 0) {
      p3++;
    }
  }
  let numP1 = (p1 / number) * 100;
  let numP2 = (p2 / number) * 100;
  let numP3 = (p3 / number) * 100;
  console.log(`${numP1.toFixed(2)}%`);
  console.log(`${numP2.toFixed(2)}%`);
  console.log(`${numP3.toFixed(2)}%`);
}
solve(["3", "3", "6", "9"]);
