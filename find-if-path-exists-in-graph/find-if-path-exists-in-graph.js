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
    const queue = [source];
    seen.add(source);

    for(let i = 0; i < edges.length; i++) {
        const [A, B] = edges[i];
        if(!graph.has(A)) graph.set(A, []);
        graph.get(A).push(B);
        if(!graph.has(B)) graph.set(B, []);
        graph.get(B).push(A);
    }

    while(queue.length) {
        const node = queue.shift();
        if(node === destination) return true;

        for(let neighbor of graph.get(node)) {
            if(!seen.has(neighbor)) {
                seen.add(neighbor);
                queue.push(neighbor);
            }  
        }
    }

    return false;
}