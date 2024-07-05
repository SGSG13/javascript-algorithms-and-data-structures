/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true;

    const pQueue = [p];
    const qQueue = [q];

    while(pQueue.length && qQueue.length) {
        const p = pQueue.shift();
        const q = qQueue.shift();

        if(!check(p, q)) return false;

        if(p && q) {
            if(!check(p.left, q.left)) return false;
            if(p.left && q.left) {
                pQueue.push(p.left);
                qQueue.push(q.left);
            }
            if(!check(p.right, q.right)) return false;
            if(p.right && q.right) {
                pQueue.push(p.right);
                qQueue.push(q.right);
            }
        }
    }

    return true;
};

function check(node1, node2) {
    if(!node1 && !node2) return true;
    if(!node1 || !node2) return false;
    if(node1.val !== node2.val) return false;
    return true;
}