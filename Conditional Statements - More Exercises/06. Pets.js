function solve(input) {
  let days = Number(input[0]);
  let foodInKilos = Number(input[1]);
  let foodForDogPerDayInKilos = Number(input[2]);
  let foodForCatPerDayInKilos = Number(input[3]);
  let foodForTurtlePerDayInKilos = Number(input[4]);
  let neededFoodForDog = days * foodForDogPerDayInKilos;
  let neededFoodForCat = days * foodForCatPerDayInKilos;
  let neededFoodForTurtle = (days * foodForTurtlePerDayInKilos) / 1000;
  let totalFood = neededFoodForDog + neededFoodForCat + neededFoodForTurtle;
  if (totalFood < foodInKilos) {
    let leftFood = foodInKilos - totalFood;
    console.log(`${Math.floor(leftFood)} kilos of food left.`);
  } else {
    let foodNeeded = totalFood - foodInKilos;
    console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
  }
}
solve(["2", "10", "1", "1", "1200"]);
solve(['5', '10', '2.1', '0.8', '321'])