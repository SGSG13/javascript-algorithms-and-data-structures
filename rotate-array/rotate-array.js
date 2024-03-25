/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length === 1) {
        return nums;
    }

    k = k % nums.length;

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);

    function reverse(start, end) {
        while(start < end) {
            [nums[start++], nums[end--]] = [nums[end], nums[start]]
        }
    }
};