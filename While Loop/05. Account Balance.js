function solve(input) {
  let deposit = input[0];
  let balance = 0;
  let i = 1;
  while (deposit !== "NoMoreMoney") {
    let amount = Number(deposit);
    if (amount < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    balance += amount;
    console.log(`Increase: ${amount.toFixed(2)}`);
    deposit = input[i];
    i++;
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}
