
var MedianFinder = function() {
    this.lo = new MaxPriorityQueue();
    this.hi = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.lo.enqueue(num);
    this.hi.enqueue(this.lo.dequeue().element);

    if (this.lo.size() < this.hi.size()) {
      this.lo.enqueue(this.hi.dequeue().element);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.lo.size() > this.hi.size()) {
      return this.lo.front().element;
    } else {
      return (this.lo.front().element + this.hi.front().element) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */