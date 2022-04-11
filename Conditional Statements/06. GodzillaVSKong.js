function solve(input) {
  let budget = Number(input[0]);
  let stuntMen = Number(input[1]);
  let priceForClothesPerson = Number(input[2]);

  let decorPrice = budget * 0.1;
  let totalPriceForClothes = stuntMen * priceForClothesPerson;

  if (stuntMen > 150) {
    totalPriceForClothes *= 0.9;
  }

  let totalMoney = decorPrice + totalPriceForClothes;

  if (totalMoney > budget) {
    let moneyNeeded = totalMoney - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  } else {
    let moneyLeft = budget - totalMoney;
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  }
}
solve(["20000", "120", "55.5"]);
