/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;

    if(n < 0) {
        n = -n;
        x = 1 / x;
    }

    return powHelper(x, n);
};

function powHelper(x, n) {
    if(n === 0) return 1;
    const half = powHelper(x, Math.floor(n / 2));
    if(n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}