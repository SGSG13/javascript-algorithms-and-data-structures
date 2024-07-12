class UnionFind {
    constructor(size) {
        this.root = [];
        this.rank = [];

        for(let i = 0; i < size; i++) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }

    find(x) {
        if(this.root[x] === x) {
            return x;
        } else {
            return this.root[x] = this.find(this.root[x]);
        }
    }

    union(x, y) {
        const rootX = this.root[x];
        const rootY = this.root[y];

        if(rootX !== rootY) {
            if(this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX;
            } else if(this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY;
            } else {
                this.root[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    const dsu = new UnionFind(n);
    logs.sort((a, b) => a[0] - b[0]);
  
    for(let [timestamp, x, y] of logs) {
        n -= dsu.connected(x, y) ? 0 : 1;
        if(n === 1) return timestamp;
        dsu.union(x, y);
    }

    return -1;
};