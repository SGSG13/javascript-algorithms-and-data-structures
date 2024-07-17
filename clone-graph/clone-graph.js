/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return node;
    const root = new Node();
    const visited = new Map();

    function dfs(sourceNode, currentNode) {
        currentNode.val = sourceNode.val;
        visited.set(sourceNode.val, currentNode);

        for(let i = 0; i < sourceNode.neighbors.length; i++) {
            const neighborVal = sourceNode.neighbors[i].val;
            if(visited.has(neighborVal)) {
                currentNode.neighbors.push(visited.get(neighborVal));
            } else {
                currentNode.neighbors.push(dfs(sourceNode.neighbors[i], new Node()));
            }
        }

        return currentNode;
    }

    dfs(node, root);

    return root;
};