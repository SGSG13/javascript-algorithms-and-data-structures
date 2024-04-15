/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.maxSize = k;
    this.size = 0;
    this.data = new Array(this.maxSize);
    this.startIndex = 0;
    this.lock = new Mutex();
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    this.lock.acquire();
    if (this.isFull()) {
        this.lock.release();
        return false;
    }

    const index = (this.startIndex + this.size) % this.maxSize;
    this.data[index] = value;
    this.size++;
    this.lock.release();
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    this.lock.acquire();
    if(this.isEmpty()) {
        this.lock.release();
        return false;
    }

    this.startIndex = (this.startIndex + 1) % this.maxSize;
    this.size--;
    this.lock.release();
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.data[this.startIndex];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
      if (this.isEmpty()) {
        return -1;
    }

    const index = (this.startIndex + this.size - 1) % this.maxSize;
    return this.data[index];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.maxSize;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

 function Mutex() {
    let isLocked = false;
    let queue = [];

    this.acquire = function () {
        if (isLocked) {
            return new Promise((resolve) => {
                queue.push(resolve);
            })
        } else {
            isLocked = true;
            return Promise.resolve();
        }
    }

    this.release = function () {
        if (queue.length > 0) {
            const next = queue.shift();
            next();
        } else {
            isLocked = false;
        }
    }
 }