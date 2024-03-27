var ListNode = function(key = -1, next = null) {
    this.key = key;
    this.next = next;
}

var MyHashSet = function() {
    this.size = 1000;
    this.set = new Array(this.size).fill(null).map(() => new ListNode());
};

MyHashSet.prototype.hash = function(key) {
    return key % this.size;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let curr = this.set[this.hash(key)];

    while (curr.next) {
        if (curr.next.key === key) {
            return;
        }

        curr = curr.next;
    }

    curr.next = new ListNode(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let curr = this.set[this.hash(key)];

    while(curr && curr.next) {
        if (curr.next.key === key) {
            curr.next = curr.next.next;
        }

        curr = curr.next;
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let curr = this.set[this.hash(key)];

    while (curr.next) {
        if (curr.next.key === key) {
            return true;
        }

        curr = curr.next;
    }

    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */