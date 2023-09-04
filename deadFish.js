// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Return the output array, and ignore all non-op characters
function parse(data) {
  let result = [];
  let current = 0;
  data.split("").map((letter) => {
    letter === "i"
      ? current++
      : letter === "d"
      ? current--
      : letter === "s"
      ? (current = current * current)
      : letter === "o"
      ? result.push(current)
      : console.log("none of the above", letter);
  });
  return result;
}

console.log(parse("iiisxxxdoso"));
