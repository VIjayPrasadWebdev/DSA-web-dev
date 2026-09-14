// Linked List Node
var LinkedListNode = function (val) {
  // WRITE YOUR NODE LOGIC
  // val
  this.val = val;
  // pointer :

  this.next = null;
};

// Linked List
var MyLinkedList = function () {
  // WRITE YOUR LINKED LIST LOGIC

  // head :

  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // WRITE YOUR LOGIC

  if (index < 0 || index >= size) return -1;
  let current = this.head;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.val;

  return;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  // WRITE YOUR LOGIC

  let newNode = new LinkedListNode(val);

  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // WRITE YOUR LOGIC

  if (this.head === null) {
    let newNode = new LinkedListNode(val);
    this.head = newNode;
  } else {
    let current = this.head;

    while (current.next != null) {
      current = current.next;
    }
    let newNode = new LinkedListNode(val);
    current.next = newNode;
  }

  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // WRITE YOUR LOGIC

  if (index < 0 || index <= this.size) return;
  if (index === 0) return this.addAtHead;

  if (index === size) return this.addAtTail;
  else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    let newNode = new LinkedListNode(val);
    newNode.next = current.next;
    current.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  // WRITE YOUR LOGIC

  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      let current = current.next;
    }

    current.next = current.next.next;
  }

  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 *
 * var obj = new MyLinkedList()
 *
 * var param_1 = obj.get(index)
 *
 * obj.addAtHead(val)
 *
 * obj.addAtTail(val)
 *
 * obj.addAtIndex(index,val)
 *
 * obj.deleteAtIndex(index)
 */
