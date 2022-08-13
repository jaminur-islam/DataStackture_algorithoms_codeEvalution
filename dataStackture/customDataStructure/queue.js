//============================================== Array Queue implementation ================================//

/* class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(element) {
    this.arr.push(element);
  }

  dequeue() {
    this.arr.shift();
  }
  isEmpty() {
    this.arr.length === 0;
  }

  peek() {
    return this.arr[0];
  }

  size() {
    return this.arr.length;
  }

  print() {
    console.log(this.arr.toString());
  }
}

const queue = new Queue();
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.dequeue());
console.log(queue.arr);
 */

//================================================ Object Queue Implementation ===============================//

/* class Queue {
  constructor() {
    this.item = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.item[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.item[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    return this.item;
  }
}

const queue = new Queue();
queue.enqueue(10); 
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
console.log(queue.peek());
console.log(queue.print());
console.log(queue.isEmpty());
console.log(queue.size());
 */

class Queue {
  constructor() {
    this.item = {};
    this.rear = 0;
    this.front = 0;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  enqueue(element) {
    this.item[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.item[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    return this.item;
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();

console.log(queue.size());
console.log(queue.print());
