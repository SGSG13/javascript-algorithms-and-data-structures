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
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while(curr !== null) {       // 1          2
       let nextTemp = curr.next; // 2          3
       curr.next = prev;         // 1 -> null  2 -> 1
       prev = curr;              // 1          2
       curr = nextTemp;          // 2          3
    }

    return prev;
};