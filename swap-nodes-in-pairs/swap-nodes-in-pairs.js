/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) { // 3
    if(head === null || head.next === null) return head;
    const first = head.next; // 4
    head.next = swapPairs(head.next.next); // 3 -> null
    first.next = head; // 4 -> 4
    return first; // 4
};
