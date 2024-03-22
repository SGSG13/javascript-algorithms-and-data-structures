/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];

        while(sum >= target) {
            result = Math.min(result, i + 1 - left);
            sum -= nums[left++]
        }
    }

    return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};