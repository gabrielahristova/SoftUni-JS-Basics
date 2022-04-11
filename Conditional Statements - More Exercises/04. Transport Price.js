function solve(input) {
  const startedPriceForTaxi = 0.7;
  const taxiPerDay = 0.79;
  const taxiPerNight = 0.9;
  const priceForAutobus = 0.09;
  const priceForTrainPerKm = 0.06;
  let km = Number(input[0]);
  let dayOrNight = input[1];
  if (km < 20 && dayOrNight === "day") {
    let priceForTaxi = startedPriceForTaxi + km * taxiPerDay;
    console.log(priceForTaxi.toFixed(2));
  } else if (km < 20 && dayOrNight === "night") {
    let priceForTaxiNight = startedPriceForTaxi + km * taxiPerNight;
    console.log(priceForTaxiNight.toFixed(2));
  } else if (km >= 20 && km < 100) {
    let priceForBus = km * priceForAutobus;
    console.log(priceForBus.toFixed(2));
  } else if (km >= 100) {
    let priceForTrain = km * priceForTrainPerKm;
    console.log(priceForTrain.toFixed(2));
  }
}
solve(["5", "day"]);
solve(["7", "night"]);
solve(["25", "day"]);
solve(["180", "night"]);
