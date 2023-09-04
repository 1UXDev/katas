// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  let words = str.split(" ");

  words = words.map((word) => {
    return word !== "!" && word !== "?"
      ? (word = word.slice(1, word.length) + word[0] + "ay")
      : word;
  });

  return words.join(" ");
}

console.log(pigIt("Pig latin is cool !"), "igPay atinlay siay oolcay");
console.log(pigIt("This is my string"), "hisTay siay ymay tringsay");
