/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
    const graph = new Map();
    const visited = new Set();
    const inStack = new Set();

    for (let [A, B] of edges) {
        if (!graph.has(A)) graph.set(A, []);
        graph.get(A).push(B);
    }

    function dfs(node) {
        if (visited.has(node)) return true; 
        if (inStack.has(node)) return false;

        inStack.add(node);

        if (!graph.has(node)) {
            inStack.delete(node);
            return node === destination;
        }

        for (let neighbor of graph.get(node)) {
            if (!dfs(neighbor)) return false;
        }

        inStack.delete(node);
        visited.add(node);
        
        return true;
    }

    if (graph.has(destination) && graph.get(destination).length > 0) return false;

    return dfs(source);
};
