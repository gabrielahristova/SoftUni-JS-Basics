function solve(input) {
  let indexElement = input[0];
  let i = 1;
  let min = Number.MAX_SAFE_INTEGER;
  while (indexElement !== "Stop") {
    let num = Number(indexElement);
    if (num < min) {
      min = num;
    }
    inputElement = input[i];
    i++;
  }
  console.log(min);
}
