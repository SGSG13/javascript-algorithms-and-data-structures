/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let left = 1;
    let right = nums.length - 1;

    while(left < right) {
        let count = 0;
        let mid = Math.floor((left + right) / 2);

        for(let num of nums) {
            if(num <= mid) {
                count++;
            }
        }

        if(count > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};