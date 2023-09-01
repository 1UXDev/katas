// You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// return the three product names with the highest revenue (amount * price).

// Note: if multiple products have the same revenue, order them according to their original positions in the input list.

/*
check if a*p is bigger than z's value in memory
*/

function top3(products, amounts, prices) {
  let topProducts = [];

  for (let i = 0; i < products.length; i++) {
    topProducts.push({
      name: products[i],
      value: amounts[i] * prices[i],
      oldIndex: i,
    });
  }

  return topProducts
    .sort((a, b) => {
      return b.value === a.value ? a.oldIndex - b.oldIndex : b.value - a.value;
    })
    .slice(0, 3)
    .map((product) => (product = product.name));
}

console.log(
  top3(
    [
      "Cell Phones",
      "Vacuum Cleaner",
      "Computer",
      "Autos",
      "Gold",
      "Fishing Rods",
      "Lego",
      " Speakers",
    ],
    [0, 12, 24, 17, 19, 23, 120, 8],
    [9, 24, 29, 31, 51, 8, 120, 14]
  )
);

// top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [0, 12, 24, 17, 19, 23, 120, 8], [9, 24, 29, 31, 51, 8, 120, 14]), ['Lego', 'Gold', 'Computer']);
