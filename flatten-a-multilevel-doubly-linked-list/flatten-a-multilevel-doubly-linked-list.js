/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (head === null) {
        return head;
    }

    let pseudoHead = new Node(0, null, head ,null);
    let curr = pseudoHead;
    let prev = pseudoHead;
    let stack = [head];

    while(stack.length !== 0) {
        curr = stack.pop();
        prev.next = curr;
        curr.prev = prev;

        if (curr.next !== null) {
            stack.push(curr.next);
        }

        if (curr.child !== null) {
            stack.push(curr.child);
            curr.child = null;
        }

        prev = curr;
    }

    pseudoHead.next.prev = null;
    return pseudoHead.next;
};