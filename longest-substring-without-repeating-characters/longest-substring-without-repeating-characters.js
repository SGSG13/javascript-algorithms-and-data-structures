/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seen = new Map();
    let count = 0;

    for(let end = 0, start = 0; end < s.length; end++) {
        if (seen.has(s[end])) {
            start = Math.max(start, seen.get(s[end]));
        }

        count = Math.max(count, end - start + 1);
        seen.set(s[end], end + 1)
    }

    return count;
}