/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const comperator = (a, b) => a.soldiers !== b.soldiers ? b.soldiers - a.soldiers : b.index - a.index;
    const heap = new Heap([], comperator);

    for(let index = 0; index < mat.length; index++) {
        const soldiers = getSoldiers(mat[index]);
        if(heap.size() < k) {
            heap.offer({ soldiers, index })
        } else if(heap.peek().soldiers > soldiers) {
            heap.offer({ soldiers, index });
            heap.poll();
        }
    }

    const result = new Array(k);
    for(let i = k -1; i >= 0; i--) {
        result[i] = heap.poll().index;
    }
    return result;
};

const getSoldiers = (row) => row.reduce((acc, item) => acc + item, 0);

class Heap {
    constructor(data = [], comperator = (a, b) => a - b) {
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