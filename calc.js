const hoursInMonths = 720
const kwPrice = 3.4

var cardWtUsage = 72
var cardNumber = 12
var rigWtUsage = 80

var powerUsagePerHour = (cardWtUsage * cardNumber + rigWtUsage) / 1000

let powerUsagePerMonth = hoursInMonths * powerUsagePerHour.toFixed(1)

let sumPerMonths = powerUsagePerMonth * kwPrice

console.log(`For 12 cards ${powerUsagePerMonth}kWt/h`)
console.log(`Spend for electricity per month ${sumPerMonths} RUB`)
console.log(`Spend for electricity per day ${sumPerMonths / 30} RUB`)


function miningCalc() {
    const hoursInMonths = 720
    const kWPriceRUB = 3.4
    const kWPriceUSD = 0.05
}
