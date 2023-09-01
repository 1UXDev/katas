// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation
// being returned. Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
  let result = [];

  convertToHex(r);
  convertToHex(g);
  convertToHex(b);

  function convertToHex(value) {
    if (value > 0 && value < 255) {
      result.push(numberToLetter(Math.floor(value / 16)));
      result.push(numberToLetter(value % 16));
    } else if (value >= 255) {
      result.push("FF");
    } else {
      result.push("00");
    }
  }

  function numberToLetter(dec) {
    return dec === 10
      ? (dec = "A")
      : dec === 11
      ? (dec = "B")
      : dec === 12
      ? (dec = "C")
      : dec === 13
      ? (dec = "D")
      : dec === 14
      ? (dec = "E")
      : dec === 15
      ? (dec = "F")
      : dec;
  }

  return result.join("");
}

console.log(rgb(173, 255, 47));
