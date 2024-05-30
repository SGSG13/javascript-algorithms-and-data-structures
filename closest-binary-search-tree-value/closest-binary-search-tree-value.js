/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest = root.val;

    while(root !== null) {
        const val = root.val;
        closest = Math.abs(val - target) < Math.abs(closest - target) || 
        (Math.abs(val - target) === Math.abs(closest - target) && val < closest)
        ? val
        : closest;
        root = val > target ? root.left : root.right;
    }

    return closest;
};