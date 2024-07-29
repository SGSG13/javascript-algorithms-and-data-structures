/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const graph = new Map();
    const inDegree = new Array(n).fill(0);
    const queue = [];

    for(let [a, b] of edges) {
        if(!graph.has(a)) graph.set(a, []);
        if(!graph.has(b)) graph.set(b, []);
        graph.get(a).push(b);
        graph.get(b).push(a);
        inDegree[a]++;
        inDegree[b]++;
    }

    for(let i = 0; i < n; i++) {
        if(inDegree[i] === 1) {
            queue.push(i);
        }
    }

    while(n > 2) {
        const length = queue.length;
        for(let i = 0; i < length; i++) {
            const vertex = queue.shift();
            n--;
            for(let neighbor of graph.get(vertex)) {
                inDegree[neighbor]--;
                if(inDegree[neighbor] === 1) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return queue;
};