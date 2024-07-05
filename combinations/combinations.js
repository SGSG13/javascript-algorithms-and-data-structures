/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    function backtrack(curr, firstNum) {
        if(curr.length === k) {
            result.push([...curr]);
            return;
        }

        const need = k - curr.length;
        const remain = n - firstNum + 1;
        const available = remain - need;

        for(let num = firstNum; num <= available + firstNum; num++) {
            curr.push(num);
            backtrack(curr, num + 1);
            curr.pop();
        }
    }

    backtrack([], 1);
    return result;
};