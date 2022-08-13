class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front += 1;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
  }

  print() {
    if (!this.isEmpty()) {
      return "The Queue Is Empty";
    } else {
      let i;
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + "";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const circularQueue = new CircularQueue(3);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.dequeue();
circularQueue.enqueue(40);

console.log(circularQueue);
