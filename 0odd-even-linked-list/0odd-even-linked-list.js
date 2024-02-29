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
var oddEvenList = function(head) {
    let evenList = new ListNode(0, head);
    let oddList = new ListNode(0, head);
    let prevEven = evenList;
    let prevOdd = oddList;
    let currentIndex = 1;
    let current = head;

    if (head === null) {
        return head;
    }

    while(current !== null) {
        if (currentIndex % 2 === 0) {
         prevEven.next = current.next;
         prevOdd = current;
        } else {
         prevOdd.next = current.next;
         prevEven = current;
        }
        currentIndex++;
        current = current.next;
    }

    current = evenList = evenList.next;
  
    while (current.next !== null) {
        current = current.next;
    }

    current.next = oddList.next;

    return evenList;
};