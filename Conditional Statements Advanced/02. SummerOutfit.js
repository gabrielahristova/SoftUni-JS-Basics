function solve(input) {
  const degree = Number(input[0]);
  const timeOfDay = input[1];
  switch (timeOfDay) {
    case "Morning":
      if (degree <= 18) {
        console.log(
          `It's ${degree} degrees, get your Sweatshirt and Sneakers.`
        );
      } else if (degree > 18 && degree <= 24) {
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
      } else {
        console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
      }
      break;
    case "Afternoon":
      if (degree <= 18) {
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
      } else if (degree > 18 && degree <= 24) {
        console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
      } else {
        console.log(`It's ${degree} degrees, get your Swim Suit and Barefoot.`);
      }
      break;
    case "Evening":
      console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
  }
}
