/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let x = 1;

    for(let i = digits.length - 1; i >= 0; i--) {
        let sum = x + digits[i];
        digits[i] = sum % 10;
        x = Math.floor(sum / 10)
    }

    if (x) {
        digits.unshift(x)
    }

    return digits;
};