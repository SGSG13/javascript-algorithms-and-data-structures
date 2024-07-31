/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = new Map();

    function dp(i) {
        if (i < 2) return 0;
        if(!memo.has(i)) memo.set(i, Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]));
        return memo.get(i);
    }

    return dp(cost.length)
};