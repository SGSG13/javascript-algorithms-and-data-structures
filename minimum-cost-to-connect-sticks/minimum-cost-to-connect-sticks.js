/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    const heap = new MinPriorityQueue();
    let result = 0;

    for(let stick of sticks) {
        heap.enqueue(stick);
    }

    while(heap.size() > 1) {
        const sum = heap.dequeue().element + heap.dequeue().element;
        result += sum;
        heap.enqueue(sum);
    }

    return result;
};