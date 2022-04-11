function solve(input) {
  let n = Number(input.shift());
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  for (let i = 0; i < n; i++) {
    let currentNumber = Number(input.shift());
    if (currentNumber < 200) {
      p1++;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      p2++;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      p3++;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      p4++;
    } else if (currentNumber >= 800) {
      p5++;
    }
  }
  let numP1 = (p1 / n) * 100;
  let numP2 = (p2 / n) * 100;
  let numP3 = (p3 / n) * 100;
  let numP4 = (p4 / n) * 100;
  let numP5 = (p5 / n) * 100;
  console.log(`${numP1.toFixed(2)}%`);
  console.log(`${numP2.toFixed(2)}%`);
  console.log(`${numP3.toFixed(2)}%`);
  console.log(`${numP4.toFixed(2)}%`);
  console.log(`${numP5.toFixed(2)}%`);
}
solve(["3", "1", "2", "999"]);
