/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let currentNode = head;

    for(let i = 0; i < n; i++) {
        currentNode = currentNode.next;
    }

    if (currentNode === null) {
        return head.next;
    }

    let nodeBeforeRemove = head;

    while(currentNode.next !== null) {
        currentNode = currentNode.next;
        nodeBeforeRemove = nodeBeforeRemove.next;
    } 

    nodeBeforeRemove.next = nodeBeforeRemove.next.next;

    return head;
};