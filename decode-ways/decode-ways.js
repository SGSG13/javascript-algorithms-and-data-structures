/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const memo = new Map();

    function dp(index) {
        if (memo.has(index)) {
            return memo.get(index);
        }
        if (index == s.length) {
            return 1;
        }
        if (s.charAt(index) == "0") {
            return 0;
        }
        if (index == s.length - 1) {
            return 1;
        }
        let ans = dp(index + 1);
        if (parseInt(s.substring(index, index + 2)) <= 26) {
            ans += dp(index + 2);
        }
        memo.set(index, ans);
        return ans;
    };
    return dp(0);
};