function solve(input) {
  const priceOfRoses = 5;
  const priceOfDalies = 3.8;
  const priceOfTulips = 2.8;
  const priceOfNarcius = 3;
  const priceOfGladius = 2.5;
  const typeOfFlowers = input[0];
  const countOfFlowers = Number(input[1]);
  const budget = Number(input[2]);
  let finalPrice = 0;
  switch (typeOfFlowers) {
    case "Roses":
      if (countOfFlowers > 80) {
        finalPrice -= countOfFlowers * priceOfRoses * 0.1;
      }
      finalPrice += countOfFlowers * priceOfRoses;
      break;
    case "Dahlias":
      if (countOfFlowers > 90) {
        finalPrice -= countOfFlowers * priceOfDalies * 0.15;
      }
      finalPrice += countOfFlowers * priceOfDalies;
      break;
    case "Tulips":
      if (countOfFlowers > 80) {
        finalPrice -= countOfFlowers * priceOfTulips * 0.15;
      }
      finalPrice += countOfFlowers * priceOfTulips;
      break;
    case "Narcissus":
      if (countOfFlowers < 120) {
        finalPrice += countOfFlowers * priceOfNarcius * 0.15;
      }
      finalPrice += countOfFlowers * priceOfNarcius;
      break;
    case "Gladiolus":
      if (countOfFlowers < 80) {
        finalPrice += countOfFlowers * priceOfGladius * 0.2;
      }
      finalPrice += countOfFlowers * priceOfGladius;
  }
  if (budget >= finalPrice) {
    let moneyLeft = budget - finalPrice;
    console.log(
      `Hey, you have a great garden with ${countOfFlowers} ${typeOfFlowers} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    const moneyNeeded = finalPrice - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}
solve(["Roses", "55", "250"]);
