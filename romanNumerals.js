// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1,000

function solution(roman) {
  let num = roman.split("");
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    let current = convert(num[i]);
    let next = convert(num[i + 1]);

    if (next && current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  function convert(val) {
    return val === "I"
      ? 1
      : val === "V"
      ? 5
      : val === "X"
      ? 10
      : val === "L"
      ? 50
      : val === "C"
      ? 100
      : val === "D"
      ? 500
      : val === "M"
      ? 1000
      : null;
  }

  return result;
}

//console.log("das Ergebnis ist..." + solution("IV")); // 4
//console.log(solution("LVIII")); // 58
console.log(solution("MCMXCIV")); // 1994
