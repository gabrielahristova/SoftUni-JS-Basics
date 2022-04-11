function solve(input) {
  let year = input[0];
  let holiays = Number(input[1]);
  let weekends = Number(input[2]);

  let weekendsInSofia = 48 - weekends;
  let weekendsInSofisForPlay = (weekendsInSofia * 3.0) / 4.0;
  let holidaysInSofia = (holiays * 2.0) / 3.0;
  let play = holidaysInSofia + weekendsInSofisForPlay + weekends;
  if (year === "leap") {
    play *= 1.15;
    console.log(`${Math.floor(play)}`);
  } else {
    console.log(`${Math.floor(play)}`);
  }
}
