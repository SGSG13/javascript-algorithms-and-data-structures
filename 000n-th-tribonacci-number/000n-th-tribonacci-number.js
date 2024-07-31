/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo = new Map();
    
    function dp(i) {
        if(i === 0) return 0;
        if (i <= 2) return 1;
        if(!memo.has(i)) memo.set(i, dp(i - 1) + dp(i - 2) + dp(i - 3));
        return memo.get(i);
    }

    return dp(n);
};