
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

function Node (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index >= this.size || index < 0) {
  	return -1;
  }
  
  let count = 0;
  let currentNode = this.head;
  
  while(count !== index) {
   currentNode = currentNode.next;
   count++;
  }
  
  return currentNode.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size || index < 0) {
  	return;
  }
  
  const newNode = new Node(val);
  let currentNode = this.head;
  let count = 0;
  
  while (count !== index && currentNode !== null && currentNode.next !== null) {
  	currentNode = currentNode.next;
    count++;
  }
  
  if (index === 0) {
  	if (currentNode !== null) {
    	const newNextNode = currentNode;
      newNode.next = newNextNode;
      newNextNode.prev = newNode;
    }
    this.head = newNode;
  } else if (index === this.size) {
  	currentNode.next = newNode;
    newNode.prev = currentNode;
  } else {
  	const newNextNode = currentNode;
    const newPrevNode = currentNode.prev;
    newNextNode.prev = newNode;
    newPrevNode.next = newNode;
    newNode.prev = newPrevNode;
    newNode.next = newNextNode;
  }
  
  this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) {
  	return;
  }
  
  let currentNode = this.head;
  let count = 0;
  
  while(count !== index) {
  	currentNode = currentNode.next;
    count++;
  }
  
  if (index === 0) {
  	const nextNode = currentNode.next;
    //   console.log('===nextNode', nextNode)
    // nextNode.prev = null;
  	this.head = nextNode;
  } else {
  	const prevNode = currentNode.prev;
    const nextNode = currentNode.next;
    
    prevNode.next = nextNode;
    
    if (nextNode) {
    	nextNode.prev = prevNode;
    }
  }
  
  this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */