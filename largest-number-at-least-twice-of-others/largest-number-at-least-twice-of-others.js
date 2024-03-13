/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length === 0) {
        return -1;
    }
    
    if (nums.length === 1) {
        return 0;
    }
    
    let maxIndex = 0;
    
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i
        }
    }
    
   for(let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[i] * 2 > nums[maxIndex]) {
            return -1;
        }
    }
    
    return maxIndex;
};