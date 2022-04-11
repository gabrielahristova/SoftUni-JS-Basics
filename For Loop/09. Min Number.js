function solve(input) {
  let count = Number(input.shift());
  let minNum = Number.MAX_SAFE_INTEGER;
  let numbers = Number(input.shift());
  for (let i = 1; i <= count; i++) {
    if (minNum > numbers) {
      minNum = numbers;
    }
    numbers = Number(input.shift());
  }
  console.log(minNum);
}
solve(["2", "100", "99"]);
solve(["3", "-10", "20", "-30"]);
