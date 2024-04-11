
var RandomizedSet = function() {
    this.map = new Map();
    this.list = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.map.has(val)) {
        this.list.push(val);
        this.map.set(val, this.list.length - 1);

        return true;
    }

    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        const index = this.map.get(val);

        if (index !== this.list.length - 1) {
            this.list[index] = this.list[this.list.length - 1];
            this.map.set(this.list[index], index);
        }

        this.map.delete(val);
        this.list.pop();

        return true;
    }

    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random() * this.list.length);
    return this.list[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */