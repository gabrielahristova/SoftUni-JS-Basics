function solve(input) {
  let number = Number(input[0]);
  let output = 1;
  for (let i = 1; i <= number; i++) {
    output = output * i;
  }
  console.log(output);
}
solve(["4"]);
