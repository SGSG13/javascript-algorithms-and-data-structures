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
        const rootX = this.find(x);
        const rootY = this.find(y);

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
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

var countComponents = function(n, edges) {
    const dsu = new UnionFind(n);
  
    for(let [x, y] of edges) {
        n -= dsu.connected(x, y) ? 0 : 1;
        dsu.union(x, y);
    }

    return n;
};