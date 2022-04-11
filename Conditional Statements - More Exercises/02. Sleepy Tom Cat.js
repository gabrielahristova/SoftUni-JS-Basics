function solve(input) {
  let days = Number(input[0]);
  let minutesPlayNoWorkDay = days * 127;
  let totalMinutesPlay = (365 - days) * 63;
  let total = totalMinutesPlay + minutesPlayNoWorkDay;
  if (total <= 30000) {
    let leftHours = 30000 - total;
    let hours = leftHours / 60;
    console.log("Tom will run away");
    console.log(`${hours.toFixed(0)} hours and ${Math.trunc(hours)} minutes more for play`);
  } else {
    let minutesMore = total - 30000;
    let hoursMore = minutesMore / 60;
    console.log("Tom sleeps well");
    console.log(`${hoursMore.toFixed(0)} hours and ${Math.floor(hoursMore)} minutes less for play`);
  }
}
solve(["20"]);
solve(["113"]);