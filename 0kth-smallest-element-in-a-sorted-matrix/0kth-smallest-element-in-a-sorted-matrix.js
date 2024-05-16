/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const heap = new Heap();

    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[r].length; c++) {
            heap.offer(matrix[r][c]);
            if(heap.size() > k) heap.poll()
        }
    }
    return heap.poll();
};

class Heap {
    constructor(data = [], comperator = (a, b) => b - a) {
        this.data = data;
        this.comperator = comperator;
        this.heapify();
    }

    offer(val) {
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

    heapify() {
        if(this.size() < 2) return null;
        for(let i = 1; i < this.size(); i++) {
            this.upBubble(i)
        }
    }

    upBubble(index) {
        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if(this.comperator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    downBubble(index = 0) {
        const lastIndex = this.size() - 1;
        while(true) {
            let leftIndex = index * 2 + 1;
            let rightIndex = index * 2 + 2;
            let findIndex = index;

            if(leftIndex <= lastIndex && this.comperator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }

            if(rightIndex <= lastIndex && this.comperator(this.data[rightIndex], this.data[findIndex]) < 0) {
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

    swap(el1, el2) {
        [this.data[el1], this.data[el2]] = [this.data[el2], this.data[el1]]
    }

    peek() {
        if(this.size() === 0) return null;
        return this.data[0];
    }

    size() {
        return this.data.length;
    }
}