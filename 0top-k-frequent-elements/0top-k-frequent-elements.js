/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    const bucket = [];
    const res = [];

    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for(let [num, freq] of map) {
        bucket[freq] = (bucket[freq] || new Set()).add(num)
    }

    for(let i = bucket.length - 1; res.length < k; i--) {
        if (bucket[i]) {
           res.push(...bucket[i]) 
        }
    }

    return res;
};