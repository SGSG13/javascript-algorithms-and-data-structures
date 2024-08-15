/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */

const MOD = Math.pow(10, 9) + 7;

var numRollsToTarget = function(n, k, target) {
    const dp = new Array(n + 1).fill(null).map(() => new Array(target + 1).fill(0));
    dp[0][0] = 1;

    for(let diceIndex = 1; diceIndex <= n; diceIndex++) {
        for(let sum = 1; sum <= target; sum++) {
            for(let face = 1; face <= k; face++) {
                if (face <= sum) {
                   dp[diceIndex][sum] = (dp[diceIndex][sum] + dp[diceIndex - 1][sum - face]) % MOD;
                }
            }
        }
    }

    return dp[n][target];
};