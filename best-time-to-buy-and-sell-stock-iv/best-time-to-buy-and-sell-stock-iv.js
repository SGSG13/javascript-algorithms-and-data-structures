/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const n = prices.length;
    const memo = Array.from({ length: n + 1 }, () => Array.from({ length: k + 1 }, () => Array(2).fill(0)) );

    function dp(i, transactionsRemaining, holding) {
        if (transactionsRemaining === 0 || i === prices.length) return 0;

        if (memo[i][transactionsRemaining][holding] === 0) {
            const doNothing = dp(i + 1, transactionsRemaining, holding);
            let doSomething;

            if (holding === 1) {
                doSomething = prices[i] + dp(i + 1, transactionsRemaining - 1, 0);
            } else {
                doSomething = -prices[i] + dp(i + 1, transactionsRemaining, 1);
            }

            memo[i][transactionsRemaining][holding] = Math.max(doNothing, doSomething);
        }

        return memo[i][transactionsRemaining][holding];
    }

    return dp(0, k, 0);
};