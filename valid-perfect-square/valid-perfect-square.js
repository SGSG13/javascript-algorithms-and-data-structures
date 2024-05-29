/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return true;
    let left = 2;
    let right = num / 2;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sqr = mid * mid;

        if(sqr === num) {
            return true;
        } else if (sqr < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false
};