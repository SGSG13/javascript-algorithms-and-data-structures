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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    return Math.abs(getHeigh(root.left) - getHeigh(root.right)) < 2
    && isBalanced(root.left) && isBalanced(root.right);
};

function getHeigh(node) {
    if(!node) return -1;
    return 1 + Math.max(getHeigh(node.left), getHeigh(node.right));
}