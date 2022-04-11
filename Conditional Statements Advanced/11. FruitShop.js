function shop(input) {
  let fruit = input[0];
  let dayOfWeek = input[1];
  let quantity = Number(input[2]);

  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          quantity *= 2.5;
          console.log(quantity.toFixed(2));
          break;
        case "apple":
          quantity *= 1.2;
          console.log(quantity.toFixed(2));
          break;
        case "orange":
          quantity *= 0.85;
          console.log(quantity.toFixed(2));
          break;
        case "grapefruit":
          quantity *= 1.45;
          console.log(quantity.toFixed(2));
          break;
        case "kiwi":
          quantity *= 2.7;
          console.log(quantity.toFixed(2));
          break;
        case "pineapple":
          quantity *= 5.5;
          console.log(quantity.toFixed(2));
          break;
        case "grapes":
          quantity *= 3.85;
          console.log(quantity.toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          quantity *= 2.7;
          console.log(quantity.toFixed(2));
          break;
        case "apple":
          quantity *= 1.25;
          console.log(quantity.toFixed(2));
          break;
        case "orange":
          quantity *= 0.9;
          console.log(quantity.toFixed(2));
          break;
        case "grapefruit":
          quantity *= 1.6;
          console.log(quantity.toFixed(2));
          break;
        case "kiwi":
          quantity *= 3.0;
          console.log(quantity.toFixed(2));
          break;
        case "pineapple":
          quantity *= 5.6;
          console.log(quantity.toFixed(2));
          break;
        case "grapes":
          quantity *= 4.2;
          console.log(quantity.toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
      break;
    default:
      console.log("error");
      break;
  }
}
