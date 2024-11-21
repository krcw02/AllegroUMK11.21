function isHappyNumber(num) {
    let seenNumbers = new Set();

    while (num !== 1 && !seenNumbers.has(num)) {
        seenNumbers.add(num);
        num = sumOfSquares(num);
    }

    return num === 1;
}

function sumOfSquares(num) {
    return num
        .toString()
        .split('')
        .map(digit => parseInt(digit, 10) ** 2)
        .reduce((sum, square) => sum + square, 0);
}

console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(2)); // false
