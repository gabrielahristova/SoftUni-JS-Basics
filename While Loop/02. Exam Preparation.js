function solve(input) {
  let fail = 0;
  let index = 1;
  let sumGrade = 0;
  while (input[index] !== "Enough") {
    if (fail === parseInt(input[0])) {
      break;
    } else if (parseInt(input[index + 1]) <= 4) {
      fail++;
    }
    sumGrade += parseInt(input[index + 1]);
    index += 2;
  }
  if (input[index] === "Enough") {
    console.log(
      `Average score: ${(sumGrade / parseInt(index / 2)).toFixed(2)}`
    );
    console.log(`Number of problems: ${parseInt(index / 2)}`);
    console.log(`Last problem: ${input[index - 2]}`);
  } else {
    console.log(`You need a break, ${input[0]} poor grades.`);
  }
}
solve([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
solve(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
