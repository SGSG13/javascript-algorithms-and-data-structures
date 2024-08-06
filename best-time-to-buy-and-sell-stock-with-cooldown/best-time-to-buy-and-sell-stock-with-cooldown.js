/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    const memo = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => Array(2).fill(0)) );

    function dp(i, holding, cooldown) {
        if (i === prices.length) return 0;

        if (memo[i][holding][cooldown] === 0) {
            const doNothing = dp(i + 1, holding, cooldown);
            let doSomething = dp(i + 1, holding, 0);

            if (cooldown === 0) {
                if (holding === 1) {
                    doSomething = prices[i] + dp(i + 1, 0, 1);
                } else {
                    doSomething = -prices[i] + dp(i + 1, 1, 0);
                }
            }

            memo[i][holding][cooldown] = Math.max(doNothing, doSomething);
        }

        return memo[i][holding][cooldown];
    }

    return dp(0, 0, 0);
};