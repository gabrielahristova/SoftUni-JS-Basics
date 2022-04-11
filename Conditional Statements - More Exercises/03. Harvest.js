function solve(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let z = Number(input[2]);
  let workers = Number(input[3]);
  let total = x * y;
  let wine = (0.4 * total) / 2.5;
  if (wine >= z) {
    let totalwine = wine - z;
    let litersPerPerson = totalwine / workers;
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(wine)} liters.`
    );
    console.log(
      `${Math.ceil(totalwine)} liters left -> ${Math.ceil(
        litersPerPerson
      )} liters per person.`
    );
  } else {
    let neededWine = z - wine;
    console.log(
      `It will be a tough winter! More ${Math.floor(
        neededWine
      )} liters wine needed.`
    );
  }
}
solve(["650", "2", "175", "3"]);
solve(["1020", "1.5", "425", "4"]);
