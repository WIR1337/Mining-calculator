console.log('--------------------------------')
function miningCalc(cardWtUsage, cardNumber, rigWtUsage, usdPrice) {
    const hoursInMonths = 720
    const kWPriceRUB = 3.4

    var powerUsagePerHourKWT = (cardWtUsage * cardNumber + rigWtUsage) / 1000
    var powerUsagePerMonthKWT = hoursInMonths * powerUsagePerHourKWT.toFixed()

    var sumPerMonthsRUB = powerUsagePerMonthKWT * kWPriceRUB
    var sumPerMonthsUSD = powerUsagePerMonthKWT * kWPriceRUB / usdPrice

    // Russian edition
    // console.log(`При стоимости 1kWth/h = ${kWPriceRUB} RUB и курса 1$ = ${usdPrice} RUB`)
    // console.log(`Расход за час ${powerUsagePerHourKWT.toFixed()} kWt/h`)
    // console.log(`Расход за мес ${powerUsagePerMonthKWT.toFixed()} kWt/h`)

    // console.log(`Расход в сутки ${(sumPerMonthsRUB / 30).toFixed(2)} RUB`)
    // console.log(`Расход в сутки ${(sumPerMonthsUSD / 30).toFixed(2)} USD`)

    // console.log(`Расходы в мес ${sumPerMonthsRUB.toFixed(2)} RUB`)
    // console.log(`Расходы в мес ${sumPerMonthsUSD.toFixed(2)} USD`)


    console.log(`At a cost 1kWth/h = ${kWPriceRUB} RUB and course 1$ = ${usdPrice} RUB`)
    console.log(`Consumption per hour ${powerUsagePerHourKWT.toFixed()} kWt/h`)
    console.log(`Consumption per month ${powerUsagePerMonthKWT.toFixed()} kWt/h`)

    console.log(`Consumption per day ${(sumPerMonthsRUB / 30).toFixed(2)} RUB`)
    console.log(`Consumption per day ${(sumPerMonthsUSD / 30).toFixed(2)} USD`)

    console.log(`Consumption per month ${sumPerMonthsRUB.toFixed(2)} RUB`)
    console.log(`Consumption per month ${sumPerMonthsUSD.toFixed(2)} USD`)
}

miningCalc(72, 12, 80, 62)
console.log('--------------------------------')