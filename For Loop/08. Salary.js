function solve(input) {
  let openedTabs = Number(input.shift());
  let salary = Number(input.shift());
  for (let i = 0; i < openedTabs; i++) {
    let site = input.shift();
    if (site === "Facebook") {
      salary -= 150;
      if (salary <= 0) {
        console.log("You have lost your salary.");
        break;
      }
    }
    if (site === "Instagram") {
      salary -= 100;
      if (salary <= 0) {
        console.log("You have lost your salary.");
        break;
      }
    }
    if (site === "Reddit") {
      salary -= 50;
      if (salary <= 0) {
        console.log("You have lost your salary.");
        break;
      }
    }
    if (salary > 0 && i == openedTabs - 1) {
      console.log(salary);
    }
  }
}
solve([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
solve(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
solve[("3", "500", "Facebook", "Stackoverflow.com", "softuni.bg")];
