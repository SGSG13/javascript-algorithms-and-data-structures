/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const memo = new Map();
    const counts = new Map();

    for(let num of nums) {
        counts.set(num, (counts.get(num) || 0) + num);
    }

    function dp(num) {
        if(num < 0) return 0;
        if(!memo.has(num)) {
            memo.set(num, Math.max(dp(num - 1), (counts.get(num) || 0) + dp(num - 2)));
        }

        return memo.get(num);
    }

    return dp(Math.max(...nums));
};