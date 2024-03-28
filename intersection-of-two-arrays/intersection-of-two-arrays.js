/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set(nums1);

    return nums2.filter(num => {
        if (set.has(num)) {
            set.delete(num);
            return true;
        }
        return false
    })
};