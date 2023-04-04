function fruit(type, grams, pricePerKG) {

    let kgInGrams = grams / 1000;
    let money = kgInGrams * pricePerKG
    console.log(`I need $${money.toFixed(2)} to buy ${kgInGrams.toFixed(2)} kilograms ${type}.`)
}
fruit('orange', 2500, 1.80)