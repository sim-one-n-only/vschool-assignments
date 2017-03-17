function fixTeen(n) {
    if (n === 15 || n === 16) {
        return n;
    } else if (n >= 13) {
        return 0;
    } else if (n <= 19) {
        return 0;
    }
}


function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1, 2, 3));
console.log(sum(2, fixTeen(13), 1));
console.log(sum(2, 1, fixTeen(14)));
console.log(sum(2, fixTeen(15), fixTeen(14)));