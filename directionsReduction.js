function dirReduc(arr) {
  let check = 0;

  for (let i = 0; i < arr.length; i++) {
    (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
    (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
    (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
    (arr[i] === "WEST" && arr[i + 1] === "EAST")
      ? arr.splice(i, 2) & check++
      : null;
  }

  return check === 0 ? arr : dirReduc(arr);
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
