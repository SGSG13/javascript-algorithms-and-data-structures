/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
//  */
var copyRandomList = function(head) {
    if (head === null) {
        return head;
    }

    let ptr = head;

    while(ptr !== null) {
        const newNode = new Node(ptr.val, ptr.next, null);
        ptr.next = newNode;
        ptr = ptr.next.next;
    }

    ptr = head;

    while (ptr !== null) {
        ptr.next.random = ptr.random === null ? null : ptr.random.next;
        ptr = ptr.next.next;
    }

    let ptr_old_list = head;
    let ptr_new_list = head.next;
    let head_new_list = head.next;

    while(ptr_old_list !== null) {
        ptr_old_list.next = ptr_old_list.next.next;
        ptr_new_list.next = ptr_new_list.next !== null ? ptr_new_list.next.next : null;

        ptr_old_list = ptr_old_list.next;
        ptr_new_list = ptr_new_list.next;
    }

    return head_new_list;
}
