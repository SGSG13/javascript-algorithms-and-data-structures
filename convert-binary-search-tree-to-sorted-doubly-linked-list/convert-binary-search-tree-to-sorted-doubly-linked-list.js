/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
    if(!root) return root;
    const head = new _Node();
    let prevNode = head;

    function inorder(node) {
        if(!node) return;
        if(node.left) inorder(node.left);
        prevNode.right = node;
        node.left = prevNode;
        prevNode = node;
        return inorder(node.right);
    }

    inorder(root);
    prevNode.right = head.right;
    head.right.left = prevNode;
    return head.right;
};