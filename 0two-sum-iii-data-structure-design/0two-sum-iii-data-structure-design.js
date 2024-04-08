
var TwoSum = function() {
    this.values = new Map();
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if(this.values.has(number)) {
        this.values.set(number, this.values.get(number) + 1)
    } else {
        this.values.set(number, 1)
    }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for(let [number, count] of this.values) {
        const diff = value - number;

        if (this.values.has(diff)) {
            if (diff === number) {
                if (count > 1) {
                    return true;
                }

                continue;
            }

            return true;
        }
    }

    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */