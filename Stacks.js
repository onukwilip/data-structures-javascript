import { LinkedList } from "./LinkedList.js";

class Stack {
  constructor(...array) {
    this.items = [...array];
  }

  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop();
  }

  toArray() {
    return this.items.slice();
  }

  length() {
    return this.items.length;
  }
}

class LinkedListStack {
  constructor() {
    this.items = new LinkedList();
  }

  push(value) {
    this.items.append(value);
  }
  pop() {
    const lastItem = this.items.getLast();
    this.items.removeLast();
    return lastItem;
  }

  toArray() {
    return this.items.toArray();
  }

  length() {
    return this.items.length();
  }

  getLast() {
    return this.items.getLast();
  }
  getFirst() {
    return this.items.getFirst();
  }
}

const stack = new Stack(2, 5, 7, "Girl", 19, 389);
console.log(stack.toArray());
console.log(stack.length());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.length());
console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.length());

const linkedListStack = new LinkedListStack();

linkedListStack.push(11);
linkedListStack.push(25);
linkedListStack.push("Shoulder");
linkedListStack.push("Girl");
linkedListStack.push(19);
linkedListStack.push(45.08);
console.log(linkedListStack.toArray());
// console.log(linkedListStack.length());
console.log(linkedListStack.pop());
console.log(linkedListStack.toArray());
// console.log(linkedListStack.length());
console.log(linkedListStack.pop());
console.log(linkedListStack.toArray());
// console.log(linkedListStack.length());
console.log(linkedListStack.pop());
console.log(linkedListStack.toArray());
console.log(linkedListStack.pop());
console.log(linkedListStack.toArray());
console.log(linkedListStack.pop());
console.log(linkedListStack.toArray());
console.log(linkedListStack.pop());
console.log(linkedListStack.toArray());
