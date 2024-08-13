/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const n = prices.length;
    const memo = new Array(n + 1).fill(null).map(() => new Array(2).fill(0));

    function dp(i, holding) {
        if(i === n) return 0;

        if(memo[i][holding] === 0) {
            let doNothing = dp(i + 1, holding);
            let doSomething;

            if(holding === 1) {
                doSomething = prices[i] - fee + dp(i + 1, 0);
            } else {
                doSomething = -prices[i] + dp(i + 1, 1);
            }

            memo[i][holding] = Math.max(doNothing, doSomething);
        }

        return memo[i][holding];
    }

    return dp(0, 0);
};