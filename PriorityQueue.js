class Node {
  constructor(value, priority) {
    this.value = value;
    this.next = null;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      let currentNode = this.first;
      while (currentNode.next && priority < currentNode.next.priority) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  remove(value) {
    let currentNode = this.first;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }

      currentNode = currentNode.next;
    }

    if (currentNode.value === value) {
      currentNode = null;
    }
  }

  process() {
    const first = this.first;
    this.first = this.first.next;

    return first;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.insert("Learn React", 25);
priorityQueue.insert("Learn Data structures", 50);
priorityQueue.insert("Learn Docker", 10);
priorityQueue.insert("Learn MERN", 15);
priorityQueue.insert("Learn .NET Core", 13);

console.log(priorityQueue);
