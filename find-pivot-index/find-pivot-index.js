/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let currentLeftSum = 0;
    let currentRightSum = 0;

    for(let i = 0; i < nums.length;i++) {
        currentRightSum += nums[i];
    }

    for(let i = 0; i < nums.length; i++) {
        if (currentLeftSum === currentRightSum - currentLeftSum - nums[i]) {
            return i;
        }
         currentLeftSum += nums[i];
    }

    return -1
};