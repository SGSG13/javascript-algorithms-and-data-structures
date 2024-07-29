/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(n, relations) {
    const graph = new Map();
    const inDegree = new Array(n + 1).fill(0);
    const queue = [];
    let completedCourses = 0;
    let semesters = 0;

    for(let [a, b] of relations) {
        if(!graph.has(a)) graph.set(a, []);
        graph.get(a).push(b);
        inDegree[b]++;
    }

    for(let i = 1; i < n + 1; i++) {
        if(inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while(queue.length > 0) {
        const length = queue.length;
        for(let i = 0; i < length; i++) {
            const vertex = queue.shift();
            completedCourses++;

            if(!graph.has(vertex)) continue;

            for(let neighbor of graph.get(vertex)) {
                inDegree[neighbor]--;
                if(inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        semesters++;
    }

    return completedCourses !== n ? -1 : semesters;
};