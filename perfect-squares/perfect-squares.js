/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const queue = [[0, 0]];
    const seen = new Set();

    while(queue.length) {
        const [curr, count] = queue.shift();

        if (curr === n) {
            return count;
        }

        for(let i = 1; i * i <= n; i++) {
            const next = curr + i * i;

            if (next <= n && !seen.has(next)) {
                seen.add(next);
                queue.push([next, count + 1]);
            }
        }
    }
};