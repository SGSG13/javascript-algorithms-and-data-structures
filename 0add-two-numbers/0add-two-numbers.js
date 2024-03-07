/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let tail = head;
    let prevInt = 0;

    while(l1 !== null || l2 !== null || prevInt) {
        let v1 = l1 === null ? 0 : l1.val;
        let v2 = l2 === null ? 0 : l2.val;
        let sum = v1 + v2 + prevInt;
        prevInt = Math.floor(sum / 10);

        tail.next = new ListNode(sum % 10);
        tail = tail.next;

        if (l1 !== null) {
            l1 = l1.next;
        }

        if (l2 !== null) {
            l2 = l2.next;
        }
    }

    return head.next;
};