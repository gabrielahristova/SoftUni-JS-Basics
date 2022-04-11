function solve(input) {
  let fual = input[0];
  let litersFuel = Number(input[1]);
  if (fual === "Diesel" && litersFuel >= 25) {
    console.log(`You have enough ${fual.toLowerCase()}.`);
  } else if (fual === "Diesel" && litersFuel < 25) {
    console.log(`Fill your tank with ${fual.toLowerCase()}!`);
  } else if (fual === "Gasoline" && litersFuel >= 25) {
    console.log(`You have enough ${fual.toLowerCase()}.`);
  } else if (fual === "Gasoline" && litersFuel < 25) {
    console.log(`Fill your tank with ${fual.toLowerCase()}!`);
  } else if (fual === "Gas" && litersFuel >= 25) {
    console.log(`You have enough ${fual.toLowerCase()}.`);
  } else if (fual === "Gazoline" && litersFuel < 25) {
    console.log(`Fill your tank with ${fual.toLowerCase()}!`);
  } else {
    console.log("Invalid fuel!");
  }
}
solve(["Diesel", "10"]);
solve(["Gasoline", "40"]);
solve(["Gas", "25"]);
solve(["Kerosene", "200"]);
