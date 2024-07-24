/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = new Map();
    const minQueue = new MinPriorityQueue({ priority: (node) => node[1] });
    const distances = new Array(n + 1).fill(Infinity);

    for(let [u, v, w] of times) {
        if(!graph.has(u)) graph.set(u, []);
        if(!graph.has(v)) graph.set(v, []);
        graph.get(u).push([v, w]);
    }

    distances[k] = 0;
    minQueue.enqueue([k, 0])

    while(minQueue.size() > 0) {
        const [currentNode, currentDistance] = minQueue.dequeue().element;
        if(currentDistance > distances[currentNode]) continue;

        for(let [neighborNode, neighborDistance] of graph.get(currentNode)) {
            const newNeighborDistance = neighborDistance + currentDistance;
            if(distances[neighborNode] > newNeighborDistance) {
                distances[neighborNode] = newNeighborDistance;
                minQueue.enqueue([neighborNode, newNeighborDistance]);
            }
        }
    }

    const maxDistance = Math.max(...distances.slice(1));
    return maxDistance === Infinity ? -1 : maxDistance;
};