/*
Given two array of integers(arr1,arr2). 
Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), 
their difference is as big as possible(absolute value); 

Again, you should to find a pair of numbers, their difference is as small as possible. 
Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]
*/

function maxAndMin(arr1, arr2) {
  let maxDiff = null;
  let minDiff = null;

  for (let i = 0; i <= arr1.length; i++) {
    for (let z = 0; z <= arr2.length; z++) {
      let current =
        arr1[i] - arr2[z] >= arr2[z] - arr1[i]
          ? arr1[i] - arr2[z]
          : arr2[z] - arr1[i];

      (current >= 0 && current <= minDiff) || minDiff === null
        ? (minDiff = current)
        : null;

      current >= maxDiff || maxDiff === null ? (maxDiff = current) : null;
    }
  }

  return [maxDiff, minDiff];
}

console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// Math.max(...arr1) - Math.min(...arr2),
// Math.min(...arr1) - Math.min(...arr2),

/*
maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
maxAndMin([3],[20]) === [17,17]
maxAndMin([3,10,5],[3,10,5]) === [7,0]
maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]
  */

/*
// Works but is not efficient yet
let a1M = Math.max(...arr1);
  let a2M = Math.max(...arr2);
  let a1m = Math.min(...arr1);
  let a2m = Math.min(...arr2);

  let maxDiff = a1M - a2m > a2M - a1m ? a1M - a2m : a2M - a1m;

  let minDiff = null;

  for (let i = 0; i <= arr1.length; i++) {
    for (let z = 0; z <= arr2.length; z++) {
      arr1[i] - arr2[z] >= 0
        ? arr1[i] - arr2[z] < minDiff || minDiff === null
          ? (minDiff = arr1[i] - arr2[z])
          : console.log("abc")
        : arr2[z] - arr1[i] >= 0
        ? arr2[z] - arr1[i] < minDiff || minDiff === null
          ? (minDiff = arr2[z] - arr1[i])
          : console.log("def")
        : null;
    }
*/
