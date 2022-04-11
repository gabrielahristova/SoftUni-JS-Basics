function solve(input) {
  let i = 0;
  let line = input[i++];
  while (line !== "End") {
    let destination = line;
    let price = Number(input[i++]);
    let saved = 0;
    while (saved < price) {
      saved += Number(input[i++]);
    }
    console.log(`Going to ${destination}!`);

    line = input[i++];
  }
}
solve([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
