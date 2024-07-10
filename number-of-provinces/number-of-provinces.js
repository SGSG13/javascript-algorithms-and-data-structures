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
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY;
            } else {
                this.root[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const size = isConnected.length;
    const djs = new UnionFind(size);
    
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            if(isConnected[i][j] === 1) {
                djs.union(i, j);
            }
        }
    }

    const provinces = new Set();
    for(let i = 0; i < size; i++) {
        provinces.add(djs.find(i));
    }

    return provinces.size;
};