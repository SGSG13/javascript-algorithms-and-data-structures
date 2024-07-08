/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    function backtrack(curr) {
        if(curr.length === nums.length) {
            result.push([...curr]);
            return;
        }

        for(let num = 0; num < nums.length; num++) {
            if(!curr.includes(nums[num])) {
                curr.push(nums[num]);
                backtrack(curr);
                curr.pop();
            }    
        }
    }

    backtrack([]);
    return result;
};