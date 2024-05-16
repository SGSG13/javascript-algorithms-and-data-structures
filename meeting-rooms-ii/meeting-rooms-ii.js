/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const heap = new MinPriorityQueue();

    for(let [start, end] of intervals) {
        const lastEndTime = heap.front();
        if (lastEndTime && lastEndTime.element <= start) heap.dequeue();
        heap.enqueue(end);
    }
    return heap.size();
};