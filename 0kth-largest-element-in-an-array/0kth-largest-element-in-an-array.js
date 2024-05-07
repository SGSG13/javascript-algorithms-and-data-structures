/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = new MinHeap();

    for(let num of nums) {
        heap.push(num);

        if (heap.size > k) {
            heap.pop();
        }
    }

    return heap.peek();
};

var MinHeap = function () {
    this.heap = [];
    this.size = 0;

    this.push = function(val) {
        this.heap.push(val);
        this.size++;
        this.upBubble();
    }

    this.pop = function() {
        const lastEl = this.heap.pop();
        this.heap[0] = lastEl;
        this.size--;
        this.downBubble();
    }

    this.peek = function() {
        return this.heap[0];
    }

    this.upBubble = function() {
        let index = this.size - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while(this.heap[parentIndex] > this.heap[index]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    this.downBubble = function() {
        let index = 0;
        let child = (index * 2) + 1;

        while(child < this.size) {
            const right = (index * 2) + 2;

            if(right && right < this.size && this.heap[right] < this.heap[child]) {
                child = right;
            }

            if (this.heap[index] <= this.heap[child]) {
                break;
            }

            this.swap(index, child);
            index = child;
            child = (index * 2) + 1;
        }
    }

    this.swap = function(el1, el2) {
        const temp = this.heap[el1];
        this.heap[el1] = this.heap[el2];
        this.heap[el2] = temp;
    }
}