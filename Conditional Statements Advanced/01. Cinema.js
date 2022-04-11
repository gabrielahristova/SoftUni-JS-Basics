function solve(input) {
  const primierPrice = 12.0;
  const normalPrice = 7.5;
  const discountPrice = 5.0;
  const typeOfProjection = input[0];
  let rows = Number(input[1]);
  let cols = Number(input[2]);
  let finalMoney = 0;
  switch (typeOfProjection) {
    case "Premiere":
      finalMoney = rows * cols * primierPrice;
      break;
    case "Normal":
      finalMoney = rows * cols * normalPrice;
      break;
    case "Discount":
      finalMoney = rows * cols * discountPrice;
      break;
  }
  console.log(`${finalMoney.toFixed(2)}`);
}
solve(["Premiere", "10", "12"]);
