// I always thought that my old friend John was rather richer than he looked, but I never knew exactly how much money he actually had. One day (as I was plying him with questions) he said:

// "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
// "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
// "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
// Could you tell me in each possible case:

// how much money f he could possibly have ?
// the cost c of a car?
// the cost b of a boat?
// So, I will have a better idea about his fortune. Note that if m-n is big enough, you might have a lot of possible answers.

// Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers as [ ["M: f", "B: b", "C: c"], ... ]. "M" stands for money, "B" for boats, "C" for cars.

// Note: m, n, f, b, c are positive integers, where 0 <= m <= n or m >= n >= 0. m and n are inclusive.

// // -------- old solution
function howMuch(m, n) {
  let result = [];
  let larger = m > n ? m : n;
  let smaller = n > m ? m : n;

  for (let i = smaller; i <= larger; i++) {
    i % 7 === 2 && i % 9 === 1
      ? result.push([
          `M: ${i}`,
          `B: ${Math.floor(i / 7)}`,
          `C: ${Math.floor(i / 9)}`,
        ])
      : null;
  }

  return result;
}

/*
1. hat zwischen 0 & 100 € --> 65
2. 65 - (Bootkosten * 7) = 2 --> 65 = 2+Bootkosten*7 --> 65/7 = 2/7+Bootkosten --> 63/7 = Bootkosten
*/

console.log(howMuch(1, 100), [
  ["M: 37", "B: 5", "C: 4"],
  ["M: 100", "B: 14", "C: 11"],
]);

console.log(howMuch(9992, 9989));

// expected [] to deeply equal [ [ 'M: 9991', 'B: 1427', 'C: 1110' ] ]
//1110 * x = 9993
