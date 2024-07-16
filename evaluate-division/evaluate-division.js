class UnionFind {
    constructor() {
        this.parent = {}
        this.weight = {}
    }

    find(x) {
        if(this.parent[x] !== x) {
            const originalParent = this.parent[x];
            this.parent[x] = this.find(this.parent[x]);
            this.weight[x] *= this.weight[originalParent];
        }

        return this.parent[x];
    }

    union(x, y, value) {
        if(!this.parent[x]) {
            this.parent[x] = x;
            this.weight[x] = 1;
        }

        if(!this.parent[y]) {
            this.parent[y] = y;
            this.weight[y] = 1;
        }

        const rootX = this.find(x);
        const rootY = this.find(y);

        if(rootX !== rootY) {
            this.parent[rootX] = rootY;
            this.weight[rootX] = value * this.weight[y] / this.weight[x];
        }
    }

    getWeight(x) {
        return this.weight[x];
    }
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const dsu = new UnionFind();
    const result = [];

    for(let i = 0; i < equations.length; i++) {
        const [A, B] = equations[i];
        const value = values[i];
        dsu.union(A, B, value);
    }

    for(let [C, D] of queries) {
        const parentC = dsu.find(C);
        const parentD = dsu.find(D);
        
        if(parentC && parentD && parentC === parentD) {
            result.push(dsu.getWeight(C) / dsu.getWeight(D));
        } else {
            result.push(-1);
        }
    }

    return result;
};