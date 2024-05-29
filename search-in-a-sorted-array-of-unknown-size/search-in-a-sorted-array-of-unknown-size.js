/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    let left = 0;
    let right = 1;

    while(reader.get(right) < target) {
        left = right;
        right = right * 2;
    }

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const num = reader.get(mid);

        if(num === target) {
            return mid;
        } else if (target > num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};