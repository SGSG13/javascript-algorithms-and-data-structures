/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const sums = new Set();

    while(!sums.has(n)) {
        if (n === 1) {
            return true;
        }

        sums.add(n);
        n = getDigits(n).reduce((acc, item) => acc + Math.pow(item, 2), 0);
    }

    return false;
};

function getDigits(n) {
    let digits = [];

    while (n > 0) {
        let digit = n % 10;
        digits.push(digit);
        n = Math.floor(n / 10);
    }

    return digits;
}