/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[n][m];
};

// var longestCommonSubsequence = function(text1, text2) {
//     const n = text1.length;
//     const m = text2.length;
//     const memo = new Array(n).fill(null).map(() => new Array(m).fill(-1));

//     function dp(i, j) {
//         if(i < 0 || j < 0) return 0;
//         if (memo[i][j] === -1) {
//             if(text1[i] === text2[j]) {
//                 memo[i][j] = 1 + dp(i - 1, j - 1);
//             } else {
//                 memo[i][j] = Math.max(dp(i - 1, j), dp(i, j - 1));
//             }
//         }
//         return memo[i][j];
//     }

//     return dp(n - 1, m - 1);
// };