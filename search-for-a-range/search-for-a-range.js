/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const firstOcur = getPosition(nums, target, true);
    if(firstOcur === -1) return [-1, -1];
    const lastOcur = getPosition(nums, target, false);
    return [firstOcur, lastOcur];

    function getPosition(nums, target, isFirst) {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] === target) {
                if(isFirst) {
                    if(left === mid || nums[mid - 1] !== target) {
                        return mid;
                    }
                    right = mid - 1;
                } else {
                    if(right === mid || nums[mid + 1] !== target) {
                        return mid;
                    }
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
};