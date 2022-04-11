function solve(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arriveHour = Number(input[2]);
  let arriveMinute = Number(input[3]);

  let totalExamMin = examHour * 60 + examMinute;
  let totalArrivelMin = arriveHour * 60 + arriveMinute;

  let difference = Math.abs(totalArrivelMin - totalExamMin);
  let hourDifference = Math.floor(difference / 60);
  let minutesDifference = difference % 60;
  if (minutesDifference === 0 || (minutesDifference < 10 && hourDifference > 0)) {
    minutesDifference = `0${minutesDifference}`;
  }
  if (totalArrivelMin === totalExamMin) {
    console.log("On time");
  } else if (totalArrivelMin > totalExamMin && difference < 60) {
    console.log("Late");
    console.log(`${minutesDifference} minutes after the start`);
  } else if (totalArrivelMin > totalExamMin && difference >= 60) {
    console.log("Late");
    console.log(`${hourDifference}:${minutesDifference} hours after the start`);
  } else if (difference <= 30) {
    console.log("On time");
    console.log(`${minutesDifference} minutes before the start`);
  } else if (difference > 30 && difference < 60) {
    console.log("Early");
    console.log(`${minutesDifference} minutes before the start`);
  } else {
    console.log("Early");
    console.log(
      `${hourDifference}:${minutesDifference} hours before the start`
    );
  }
}
