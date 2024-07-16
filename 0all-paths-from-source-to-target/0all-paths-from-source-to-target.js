/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const destination = graph.length - 1;
    const result = [];

    function backtrack(node, current) {
        if(node === destination) {
            current.push(node);
            result.push([...current]);
            return;
        }

        current.push(node);

        for(let i = 0; i < graph[node].length; i++) {
            backtrack(graph[node][i], current);
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
};