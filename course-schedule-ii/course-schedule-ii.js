/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = new Map();
    const inDegree = new Array(numCourses).fill(0);
    const queue = [];
    const order = [];

    for(let [a, b] of prerequisites) {
        if(!graph.has(b)) graph.set(b, []);
        graph.get(b).push(a);
        inDegree[a]++;
    }

    for(let i = 0; i < numCourses; i++) {
        if(inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while(queue.length > 0) {
        const vertex = queue.shift();
        order.push(vertex);
        if(!graph.has(vertex)) continue;

        for(let neighbor of graph.get(vertex)) {
            inDegree[neighbor]--;
            if(inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return order.length === numCourses ? order : [];
};