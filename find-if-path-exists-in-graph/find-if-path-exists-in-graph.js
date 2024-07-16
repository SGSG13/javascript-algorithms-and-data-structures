/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = new Map();
    const seen = new Set();

    for(let i = 0; i < edges.length; i++) {
        const [A, B] = edges[i];
        if(!graph.has(A)) graph.set(A, []);
        graph.get(A).push(B);
        if(!graph.has(B)) graph.set(B, []);
        graph.get(B).push(A);
    }

    function dfs(node) {
        if(node === destination) return true;

        if(!seen.has(node)) {
            seen.add(node);

            for(let nextNode of graph.get(node)) {
                if(dfs(nextNode)) return true;
            }
        }

        return false;
    }

    return dfs(source);
}