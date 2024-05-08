/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new MinHeap();

    for(let num of nums) {
        this.heap.add(num);
    }

    while(this.heap.size() > this.k) {
        this.heap.pop();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.add(val);

    if (this.heap.size() > this.k) {
        this.heap.pop();
    }

    return this.heap.peek();
};

var MinHeap = function() {
    this.data = [];

    this.add = function(val) {
        this.data.push(val);
        this.upBubble();
    }

    this.pop = function() {
        if (this.size() === 0) return null;
        const last = this.data.pop();
        this.data[0] = last;
        this.downBubble();
    }

    this.upBubble = function() {
        let index = this.size() - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while(this.data[index] < this.data[parentIndex] && index >= 0) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    this.downBubble = function() {
        let index = 0;
        let child = (index * 2) + 1;

        while(child < this.size()) {
            const right = (index * 2) + 2;

            if (right && right < this.size() && this.data[right] < this.data[child]) {
                child = right;
            }

            if(this.data[index] <= this.data[child]) {
                break;
            }

            this.swap(index, child);
            index = child;
            child = (index * 2) + 1;
        }
    }

    this.swap = function(el1, el2) {
        [this.data[el1], this.data[el2]] = [this.data[el2], this.data[el1]];
    }

    this.peek = function() {
        if (this.size() === 0) return null;
        return this.data[0];
    }

    this.size = function() {
        return this.data.length;
    }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */