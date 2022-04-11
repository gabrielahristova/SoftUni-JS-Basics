function solve(input) {
  let v = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let h = Number(input[3]);
  let totalP1 = p1 * h;
  let totalP2 = p2 * h;
  let totalLiters = totalP1 + totalP2;
  if (totalLiters <= v) {
    let p1Percent = (totalP1 / totalLiters) * 100;
    let totalLitersPercent = (totalLiters / v) * 100;
    let p2Percent = (totalP2 / totalLiters) * 100;
    console.log(
      `The pool is ${totalLitersPercent.toFixed(
        2
      )}% full. Pipe 1: ${p1Percent.toFixed(2)}%. Pipe 2: ${p2Percent.toFixed(
        2
      )}%.`
    );
  } else {
    let litersMore = totalLiters - v;
    console.log(
      `For ${h.toFixed(2)} hours the pool overflows with ${litersMore.toFixed(
        2
      )} liters.`
    );
  }
}
solve(["1000", "100", "120", "3"]);
solve(['100', '100', '100', '2.5'])
