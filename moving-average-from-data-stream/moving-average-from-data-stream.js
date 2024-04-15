/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.count = 0;
    this.sum = 0;
    this.head = 0;
    this.data = new Array(this.size).fill(0);
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.head = (this.head + 1) % this.size;
    this.sum = this.sum - this.data[this.head] + val;
    this.data[this.head] = val;
    this.count++;
 
    return this.sum / Math.min(this.count, this.size);
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */