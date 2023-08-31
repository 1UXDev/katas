/*
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word) {
  let memory = word.toLowerCase().split("");
  let encoder = "";

  for (let i = 0; i < word.length; i++) {
    memory.filter((letter) => letter === word[i].toLowerCase()).length >= 2
      ? (encoder += "(")
      : (encoder += ")");
  }

  return encoder;
}

console.log(duplicateEncode("abcddddfghhhh"));

// // Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
