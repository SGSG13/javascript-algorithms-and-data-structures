/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const heap = new MinPriorityQueue();

    for(let i = 0; i < heights.length; i++) {
        const heightDiff = heights[i + 1] - heights[i];
        if (heightDiff > 0) {
            heap.enqueue(heightDiff);
            if(heap.size() > ladders) bricks -= heap.dequeue().element;
            if (bricks < 0) return i;
        }
    }

    return heights.length - 1;
};