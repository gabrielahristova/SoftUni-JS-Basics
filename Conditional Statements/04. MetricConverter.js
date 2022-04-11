function solve(input) {
  let number = Number(input[0]);
  let inputValue = input[1];
  let outputValue = input[2];

  if (inputValue === "mm" && outputValue === "m") {
    number /= 1000;
    //number = number / 1000
  } else if (inputValue === "m" && outputValue === "mm") {
    number *= 1000;
  } else if (inputValue === "cm" && outputValue === "m") {
    number /= 100;
  } else if (inputValue === "m" && outputValue === "cm") {
    number *= 100;
  } else if (inputValue === "mm" && outputValue === "cm") {
    number /= 10;
  } else if (inputValue === "cm" && outputValue === "mm") {
    number *= 10;
  }
  console.log(number.toFixed(3));
}
solve(["12", "mm", "m"]);
