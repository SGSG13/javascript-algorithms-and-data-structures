/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const totalSum = nums.reduce((acc, item) => acc + item, 0);
    const s1 = (totalSum + target) / 2;

    return countSubsetsWithSum(nums, s1);
};

function countSubsetsWithSum(nums, target, index = 0, currentSum = 0) {
    if (index === nums.length) {
        return currentSum === target ? 1 : 0;
    }

    const withoutCurrent = countSubsetsWithSum(nums, target, index + 1, currentSum);
    const withCurrent = countSubsetsWithSum(nums, target, index + 1, currentSum + nums[index]);

    return withoutCurrent + withCurrent;
}