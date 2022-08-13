/* class Stack {
  constructor() {
    this.arr = [];
  }
  push(value) {
    console.log(value);
    this.arr.push(...value);
  }
  pop() {
    return this.arr.pop();
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }

  size() {
    return this.arr.length;
  }

  print() {
    console.log(this.arr.toString());
  }
}

const stack = new Stack();
console.log(stack.arr);
console.log(stack.push([10, 20, 30]));
console.log(stack.print());
 */

//================================================== You Tube Stack implementation =======================================//

class LinkStack {
  constructor() {
    this.arr = [];
  }

  push(link) {
    this.a = 1;
    this.arr.push(link);
  }
  front() {
    return this.arr[this.arr.length - this.a + 1];
  }

  back() {
    return this.arr[this.arr.length - ++this.a];
  }

  pop() {
    this.arr.pop();
  }
}
const linkList = new LinkStack();

linkList.push("http: first 1 ");
linkList.push("http: first 2 ");
linkList.push("http: first 3");

console.log(linkList.back());
console.log(linkList.front());

linkList.push("http: first new");
console.log(linkList.back());
console.log(linkList.front());
console.log(linkList.back());
console.log(linkList.front());

console.log(linkList.arr);
