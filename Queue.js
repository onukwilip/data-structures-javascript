import { LinkedList } from "./LinkedList.js";

class Queue {
  constructor(...args) {
    this.items = [...args];
  }

  enqueue(value) {
    this.items.unshift(value);
  }
  dequeue(value) {
    return this.items.pop();
  }
  length() {
    return this.items.length;
  }
  toArray() {
    return this.items.slice();
  }
  isEmpty() {
    return this.items.length <= 0;
  }
}

class LinkedListQueue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    this.items.append(value);
  }
  dequeue(value) {
    return this.items.removeFirst();
  }
  length() {
    return this.items.length();
  }
  toArray() {
    return this.items.toArray();
  }
  isEmpty() {
    return this.items.length() <= 0;
  }
}

console.log("ARRAY QUEUE");
const queue = new Queue(2, 5, 7, "Girl", 19, 389);
console.log(queue.toArray());
console.log(queue.length());
console.log(queue.dequeue());
console.log(queue.toArray());
console.log(queue.length());
console.log(queue.dequeue());
console.log(queue.toArray());
console.log(queue.length());
console.log(queue.enqueue(67.23));
console.log(queue.toArray());
console.log(queue.enqueue("Babalola"));
console.log(queue.toArray());

console.log("\nLINKED LIST QUEUE");
const linkedListQueue = new LinkedListQueue();
console.log(linkedListQueue.enqueue(2));
console.log(linkedListQueue.enqueue(5));
console.log(linkedListQueue.enqueue(7));
console.log(linkedListQueue.enqueue("Girl"));
console.log(linkedListQueue.enqueue(19));
console.log(linkedListQueue.enqueue(389));

console.log(linkedListQueue.toArray());
console.log(linkedListQueue.length());
console.log(linkedListQueue.dequeue());
console.log(linkedListQueue.toArray());
console.log(linkedListQueue.length());
console.log(linkedListQueue.dequeue());
console.log(linkedListQueue.toArray());
console.log(linkedListQueue.length());
console.log(linkedListQueue.enqueue(67.23));
console.log(linkedListQueue.toArray());
console.log(linkedListQueue.enqueue("Babalola"));
console.log(linkedListQueue.toArray());
