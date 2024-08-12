/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = new Array(m).fill(null).map(() => new Array(n).fill(Infinity));
    dp[0] = matrix[0];

    for(let i = 1; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(j > 0) {
                dp[i][j] = Math.min(dp[i][j], matrix[i][j] + dp[i - 1][j - 1]);
            }
            if(j + 1 < n) {
                dp[i][j] = Math.min(dp[i][j], matrix[i][j] + dp[i - 1][j + 1]);
            }
            dp[i][j] = Math.min(dp[i][j], matrix[i][j] + dp[i - 1][j]);
        }
    }

    return Math.min(...dp[m - 1]);
};