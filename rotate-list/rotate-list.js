/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null) {
        return head;
    }

    let oldTail = head;
    let n;

    for(n = 1; oldTail.next !== null; n++) {
        oldTail = oldTail.next;
    }
    oldTail.next = head;

    let newTail = head;
    for(let i = 0; i < n - k % n - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};