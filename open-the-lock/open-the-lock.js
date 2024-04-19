/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const deads = new Set(deadends);
    const queue = [['0000', 0]];
    const seen = new Set(['0000']);

    for (let [curr, count] of queue) {
        if (curr === target) return count;
        if (deads.has(curr)) continue;

        for(let next of getNextStates(curr)) {
            if (seen.has(next)) continue;
            seen.add(next);
            queue.push([next, count + 1])
        }
    }

    return -1;
};

const getNextStates = (string) => {
    const res = [];

    for(let i = 0; i < string.length; i++) {
        res.push(string.slice(0, i) + `${(+string[i] + 1) % 10}` + string.slice(i + 1));
        res.push(string.slice(0, i) + `${(+string[i] + 9) % 10}` + string.slice(i + 1));
    }

    return res;
}