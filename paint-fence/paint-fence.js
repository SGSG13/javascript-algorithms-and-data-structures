/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n === 1) return k;
    if (n === 2) return k * k;

    const dp = new Array(n + 1).fill(0);
    dp[1] = k;
    dp[2] = k * k;

    for(let i = 3; i <= n; i++) {
        dp[i] = (k - 1) * (dp[i - 1] + dp[i - 2]);
    }

    return dp[n];
};