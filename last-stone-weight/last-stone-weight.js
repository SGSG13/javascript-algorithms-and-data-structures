/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new MaxHeap();

    for(let stone of stones) {
        heap.add(stone);
    }

    while(heap.size() > 1) {
        const res = heap.pop() - heap.pop();

        if(res > 0) {
            heap.add(res);
        }
    }

    return heap.size() === 0 ? 0 : heap.pop();
};

var MaxHeap = function() {
    this.data = [];

    this.add = function (val) {
        this.data.push(val);
        this.upBubble();
    }

    this.pop = function() {
        if (this.size() === 0) return null;
        const last = this.data.pop();
        if(this.size() === 0) return last;
        const delEl = this.data[0];
        this.data[0] = last;
        this.downBubble();
        return delEl;
    }

    this.upBubble = function() {
        let index = this.size() - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while(this.data[index] > this.data[parentIndex] && index >= 0) {
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

            if(right && right < this.size() && this.data[right] > this.data[child]) {
                child = right;
            }

            if(this.data[index] >= this.data[child]) {
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
        if(this.size() === 0) return null;
        return this.data[0];
    }

    this.size = function() {
        return this.data.length;
    }
}