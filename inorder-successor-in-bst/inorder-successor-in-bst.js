/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let prev = null;
    let successor = null;

    function inorder(node) {
        if(!node) return null;
        inorder(node.left);
        if(prev && prev.val === p.val) successor = node;
        prev = node;
        return inorder(node.right);
    }

    inorder(root);

    return successor;
};