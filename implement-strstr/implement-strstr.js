/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;

    for(let windowStart = 0; windowStart <= n - m; windowStart++){
        for(let i = 0; i < m; i++) {
            if (needle[i] !== haystack[windowStart + i]) {
                break;
            }
            if (i === m - 1) {
                return windowStart;
            }
        }
    }
    return -1;
};