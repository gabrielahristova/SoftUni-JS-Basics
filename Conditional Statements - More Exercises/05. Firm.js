function solve(input) {
  const hoursPerDayWork = 8;
  const overtime = 2;
  let hourNeeded = Number(input[1]);
  let days = Number(input[2]);
  let workers = Number(input[3]);
  let hoursForTraining = 0.1 * days * hoursPerDayWork;
  let overTimeWork = workers * (overtime * days);
  let totalHours = Math.floor(hoursForTraining + overTimeWork);
  if (totalHours >= hourNeeded) {
    let leftTime = totalHours - hourNeeded;
    console.log(`Yes!${leftTime} hours left.`);
  } else {
    let moreTime = hourNeeded - totalHours;
    console.log(`Not enough time!${moreTime} hours needed.`);
  }
}
solve(["90", "7", "3"]);
solve(["99", "3", "1"]);
solve(["50", "5", "2"]);
