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

    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const size = points.length;
    const dsu = new UnionFind(size);
    const edges = [];
    let cost = 0;

    for(let i = 0; i < size; i++) {
        for(let j = i + 1; j < size; j++) {
            const weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges.push([i, j, weight]);
        }
    }

    edges.sort((a, b) => a[2] - b[2]);

    for(let [x, y, weight] of edges) {
        if(!dsu.connected(x, y)) {
            dsu.union(x, y);
            cost += weight;
        }
    }

    return cost;
};