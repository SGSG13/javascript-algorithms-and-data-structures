/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const seen = new Map();
    const res = [];

    for(let i = 0; i < nums1.length; i++) {
        if (seen.has(nums1[i])) {
            seen.set(nums1[i], seen.get(nums1[i]) + 1)
        } else {
            seen.set(nums1[i], 1);
        }
    }

    for(let i = 0; i < nums2.length; i++) {
        if (seen.get(nums2[i]) > 0) {
            res.push(nums2[i]);
            seen.set(nums2[i], seen.get(nums2[i]) - 1)
        }
    }

    return res;
};