/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heap = new MaxPriorityQueue({ compare: (e1, e2) => e2.distance - e1.distance });

    for(let point of points) {
        const distance = getDistance(point);
        heap.enqueue({ distance, point });
        if (heap.size() > k) heap.dequeue();
    }

    const result = new Array(k);
    for(let i = 0; i < k; i++) {
        const { point } = heap.dequeue();
        result[i] = point;
    }
    return result;
};

const getDistance = (point) => Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));