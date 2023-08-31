/*
Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
*/

function arrange(s) {
  let t = [];

  for (let i = 0; i < s.length / 2; i++) {
    i < (s.length - 1) / 2
      ? i % 2 === 0
        ? t.push(s[i], s[s.length - 1 - i])
        : t.push(s[s.length - 1 - i], s[i])
      : t.push(s[i]);
  }

  return t;
}

console.log(arrange([1, 2, 3, 4, 5]));

// Slower solution with slice and spread
// function arrange(s) {
//     let t = [];

//     for (let i = 0; i < s.length / 2; i++) {
//       i % 2 === 0
//         ? (t = [...t, s[i], s[s.length - 1 - i]])
//         : (t = [...t, s[s.length - 1 - i], s[i]]);
//     }

//     return t.slice(0, s.length);
//   }
