/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null) {
        return head;
    }

    let firstHalfEnd = endOfFirstHalf(head);
    let secondHalfStart = reverseList(firstHalfEnd.next);

    let p1 = head;
    let p2 = secondHalfStart;
    let result = true;

    while(result && p2 !== null) {
        if (p1.val !== p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next
    }

    firstHalfEnd.next = reverseList(secondHalfStart);

    return result;

    function endOfFirstHalf (head) {
        let slow = head;
        let fast = head;

        while(fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    function reverseList (head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        return prev;
    }
}