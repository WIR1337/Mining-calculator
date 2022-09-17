const hoursInMonths = 720
const kwPrice = 3.4

var powerUsage = (72 * 12 + 100) / 1000

let totalWt = hoursInMonths * powerUsage.toFixed(1)

let sumPerMonths = totalWt * kwPrice

console.log(`For 12 cards ${totalWt}kWt/h`)
console.log(`Spend for electricity per month ${sumPerMonths} RUB`)
console.log(`Spend for electricity per day ${sumPerMonths/30} RUB`)
