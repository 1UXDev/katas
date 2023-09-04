// just a refresher on advanced mapping

function mapTest(products, amounts, prices) {
  return products.map((name, index) => ({
    name,
    index,
    revenue: amounts[index] * prices[index],
  }));
}

console.log(
  mapTest(
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

function hexConv(d) {
  return "0" + Number(d).toString(16);
}

console.log(hexConv("240"));
