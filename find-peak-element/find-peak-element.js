/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length - 1;
    let left = 0;
    let right = n;

    while(left < right) {
        const mid = Math.floor((left + right) / 2);

        if(nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};