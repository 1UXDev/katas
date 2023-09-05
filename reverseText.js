// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

function reverseMessage(str) {
  return str
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(reverseMessage("AaaaA"), "Aaaaa");
console.log(reverseMessage("Hello there"), "Ereht Olleh");
console.log(reverseMessage("Pl34k78j"), "J87k43lp");
console.log(reverseMessage("Reverse this message!"), "!egassem Siht Esrever");
console.log(
  reverseMessage("Today is the 14th of January!"),
  "!yraunaj Fo Ht41 Eht Si Yadot"
);
console.log(reverseMessage("hty56hA T76#Td"), "Dt#67t Ah65yth");
