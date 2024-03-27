var ListNode = function(val = -1, key = -1, next = null) {
    this.val = val;
    this.key = key;
    this.next = next;
}

var MyHashMap = function() {
    this.size = 1000;
    this.map = new Array(this.size).fill(null).map(() => new ListNode())
};

MyHashMap.prototype.hash = function(key) {
    return key % this.size;
};

MyHashMap.prototype.put = function(key, value) {
    let curr = this.map[this.hash(key)];

    while(curr.next) {
        if (curr.next.key === key) {
            curr.next.val = value;
            return;
        }

        curr = curr.next;
    }

     curr.next = new ListNode(value, key);
};

MyHashMap.prototype.get = function(key) {
    let curr = this.map[this.hash(key)];

    while(curr.next) {
        if (curr.next.key === key) {
            return curr.next.val;
        }

        curr = curr.next;
    }

    return -1;
};

MyHashMap.prototype.remove = function(key) {
    let curr = this.map[this.hash(key)];

    while(curr.next) {
        if (curr.next.key === key) {
            curr.next = curr.next.next;
            return;
        }

        curr = curr.next;
    }
};
