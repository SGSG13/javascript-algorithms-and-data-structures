/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if (head === null) {
        const newNode = new Node(insertVal, null);
        newNode.next = newNode;
        return newNode;
    }
    let prev = head;
    let curr = head.next;
    let isToInsert = false;

    do {
        if (prev.val <= insertVal && insertVal <= curr.val) {
            isToInsert = true;
        } else if (prev.val > curr.val) {
            if(prev.val <= insertVal || insertVal <= curr.val) {
               isToInsert = true; 
            }
        }

        if (isToInsert) {
            prev.next = new Node(insertVal, curr);
            return head;
        }

        prev = curr;
        curr = curr.next;

    } while (prev !== head)

    prev.next = new Node(insertVal, curr);

    return head;
};