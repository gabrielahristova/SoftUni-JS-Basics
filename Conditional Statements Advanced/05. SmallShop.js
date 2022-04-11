function shop(input) {
  let product = input[0];
  let city = input[1];
  let quantity = Number(input[2]);

  if (city == "Sofia") {
    switch (product) {
      case "coffee":
        quantity *= 0.5;
        console.log(quantity);
        break;
      case "water":
        quantity *= 0.8;
        console.log(quantity);
        break;
      case "beer":
        quantity *= 1.2;
        console.log(quantity);
        break;
      case "sweets":
        quantity *= 1.45;
        console.log(quantity);
        break;
      case "peanuts":
        quantity *= 1.6;
        console.log(quantity);
        break;
    }
  }
  if (city == "Plovdiv") {
    switch (product) {
      case "coffee":
        quantity *= 0.4;
        console.log(quantity);
        break;
      case "water":
        quantity *= 0.7;
        console.log(quantity);
        break;
      case "beer":
        quantity *= 1.15;
        console.log(quantity);
        break;
      case "sweets":
        quantity *= 1.3;
        console.log(quantity);
        break;
      case "peanuts":
        quantity *= 1.5;
        console.log(quantity);
        break;
    }
  }
  if (city == "Varna") {
    switch (product) {
      case "coffee":
        quantity *= 0.45;
        console.log(quantity);
        break;
      case "water":
        quantity *= 0.7;
        console.log(quantity);
        break;
      case "beer":
        quantity *= 1.1;
        console.log(quantity);
        break;
      case "sweets":
        quantity *= 1.35;
        console.log(quantity);
        break;
      case "peanuts":
        quantity *= 1.55;
        console.log(quantity);
        break;
    }
  }
}
