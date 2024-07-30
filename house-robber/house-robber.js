/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = new Map();

    function dp(i) {
        if (i === 0) return nums[i];
        if (i === 1) return Math.max(nums[0], nums[1]);
        if(!memo.has(i)) memo.set(i, Math.max(dp(i - 1), dp(i - 2) + nums[i]));
        return memo.get(i);
    }

    return dp(nums.length - 1);
};