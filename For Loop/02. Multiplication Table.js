function solve(input) {
  let number = Number(input[0]);
  let output = "";
  for (let index = 1; index <= 10; index++) {
    output += `${index} * ${number} = ${index * number}\n`;
  }
  console.log(output);
}
solve(["5"]);
