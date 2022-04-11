function solve(input) {
  const magnoliasPrice = 3.25;
  const hyacinthsPrice = 4;
  const rosesPrice = 3.5;
  const cactiPrice = 8;
  let magnolias = Number(input[0]);
  let hyacinths = Number(input[1]);
  let roses = Number(input[2]);
  let cacti = Number(input[3]);
  let priceForGift = Number(input[4]);
  let amount =
    magnolias * magnoliasPrice +
    hyacinths * hyacinthsPrice +
    roses * rosesPrice +
    cacti * cactiPrice;
  let tax = 0.05 * amount;
  let amountWithTax = amount - tax;
  if (priceForGift > amountWithTax) {
    let leftMoney = priceForGift - amountWithTax;
    console.log(`She will have to borrow ${Math.ceil(leftMoney)} leva.`);
  } else {
    let moneyNeeded = amountWithTax - priceForGift;
    console.log(`She is left with ${Math.floor(moneyNeeded)} leva.`);
  }
}
solve(["2", "3", "5", "1", "50"]);
solve(["15", "7", "5", "10", "100"]);
