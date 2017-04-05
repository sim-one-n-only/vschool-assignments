function formatMoney(num) {
    return "$" + (num / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

console.log(formatMoney(2665));
console.log(formatMoney(123456789));