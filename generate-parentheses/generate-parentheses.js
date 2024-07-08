/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(openN, closeN, current) {
        if(openN === n && openN === closeN){
            result.push(current);
            return;
        };
        if(openN < n) backtrack(openN + 1, closeN, current + '(');
        if(closeN < openN) backtrack(openN, closeN + 1, current + ')');
    }

    backtrack(1, 0, '(');

    return result;
};