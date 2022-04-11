function solve(input) {
  let i = 0;
  let str = input[i];
  while (true) {
    if (str === "Stop") {
      break;
    }
    console.log(str);
    i++;
    str = input[i];
  }
}
