/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    const n = costs.length;
    const m = costs[0].length;
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(Infinity));
    dp[0] = costs[0];

    for(let i = 1; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (j === 0) {
                dp[i][j] = Math.min(costs[i][j] + dp[i - 1][j + 1], costs[i][j] + dp[i - 1][j + 2]);
            }
            if (j === 1) {
                dp[i][j] = Math.min(costs[i][j] + dp[i - 1][j - 1], costs[i][j] + dp[i - 1][j + 1]);
            }
            if (j === 2) {
                dp[i][j] = Math.min(costs[i][j] + dp[i - 1][j - 1], costs[i][j] + dp[i - 1][j - 2]);
            }
        }
    }

    return Math.min(...dp[n - 1]);
};