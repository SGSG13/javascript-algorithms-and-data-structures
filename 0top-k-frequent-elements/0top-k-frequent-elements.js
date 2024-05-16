/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const comparator = (a, b) => a.count - b.count;
    const map = new Map();
    const heap = new Heap([], comparator);

    for(let num of nums) {
        map.set(num, (map.get(num) || 0 ) + 1);
    }

    for(let [num, count] of map) {
        heap.add({ num, count })
        if(heap.size() > k) heap.poll();
    }

    const result = [];
    while(heap.size() > 0) {
        result.push(heap.poll().num);
    }
    return result;
};

class Heap {
    constructor(data = [], comparator = (a, b) => a - b) {
        this.data = data;
        this.comparator = comparator;
    }

    add(val) {
        this.data.push(val);
        this.upBubble(this.size() - 1);
    }

    poll() {
        if(this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop();
        if(this.size() !== 0) {
            this.data[0] = last;
            this.downBubble(0);
        }
        return result;
    }

    upBubble(index) {
        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if(this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    downBubble(index) {
        const lastIndex = this.size() - 1;
        while(true) {
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let findIndex = index;

            if(leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }

            if(rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }

            if(findIndex !== index) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(idx1, idx2) {
        [this.data[idx1], this.data[idx2]] = [this.data[idx2], this.data[idx1]]
    }

    peek() {
        if(this.size() === 0) return null;
        return this.data[0];
    }

    size() {
        return this.data.length;
    }
}