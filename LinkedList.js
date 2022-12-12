export class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null);
  }
  append(value) {
    const newValue = { value, next: null };
    if (this.tail) {
      this.tail.next = newValue;
    }
    this.tail = newValue;
    if (!this.head) {
      this.head = newValue;
    }
  }

  prepend(value) {
    const newValue = { value, next: this.head };
    this.head = newValue;

    if (!this.tail) {
      this.append(value);
    }
  }

  toArray() {
    const elements = [];
    let currentValue = this.head;
    while (currentValue) {
      elements.push(currentValue.value);
      currentValue = currentValue.next;
    }
    return elements;
  }

  delete(value) {
    if (!this.head) {
      return false;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  find(value) {
    if (!this.head) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  has(value) {
    if (!this.head) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  insertAfter(value, insertAfterValue) {
    if (!this.head) {
      return false;
    }

    let afterValue = this.find(insertAfterValue);
    if (afterValue) {
      const newNode = { value, next: afterValue.next };
      afterValue.next = newNode;

      return true;
    }
  }

  removeFirst() {
    if (!this.head) {
      return false;
    }
    if (!this.head.next) {
      this.tail = null;
    }

    this.head = this.head.next;

    return true;
  }

  removeLast() {
    if (!this.head) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.next === null) {
        currentNode.next = null;

        this.tail = currentNode;
        return true;
      }

      currentNode = currentNode.next;
    }

    if (currentNode === this.head) {
      this.head = null;
      this.tail = null;

      return true;
    }
  }

  getFirst() {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    return this.tail.value;
  }

  length() {
    const items = this.toArray();
    return items?.length;
  }
}

export class HeadLinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const newValue = {
      value,
      next: this.head,
    };

    this.head = newValue;
  }

  toArray() {
    if (!this.head) {
      return null;
    }
    const elements = [];

    let currentNode = { ...this.head };
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let currentNode = { ...this.head };

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  getFirst() {
    return this.head;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  has(value) {
    if (!this.head) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  insertAfter(value, afterValue) {
    if (!this.head) {
      return null;
    }

    let insertAfterValue = this.find(afterValue);

    if (!insertAfterValue) {
      return null;
    }

    const newValue = { value, next: insertAfterValue.next };

    insertAfterValue.next = newValue;

    return true;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
    return true;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = currentNode.next.next;
        return true;
      }

      currentNode = currentNode.next;
    }
  }
}

// const linkedList1 = new LinkedList();
// linkedList1.append(1);
// linkedList1.append("Apple");
// linkedList1.append("Goat"); //Go
// linkedList1.prepend("Goat"); //Go
// linkedList1.append(50.23); //Go
// linkedList1.append(50.23); //Go
// linkedList1.append("Junk");
// linkedList1.prepend("First value"); //Go
// linkedList1.prepend("First value"); //Go
// linkedList1.append(89); //Go

// console.log(linkedList1.toArray());
// console.log(linkedList1);
// linkedList1.delete(89);
// linkedList1.delete("Goat");
// linkedList1.delete("First value");
// linkedList1.delete(50.23);

// console.log(linkedList1.toArray());

// console.log(linkedList1.find(89));
// console.log(linkedList1.find(1));

// console.log(linkedList1.insertAfter("Inserted after: Junk", "Junk"));
// console.log(linkedList1.insertAfter("Inserted after: Apple", "Apple"));

// console.log(linkedList1.toArray());

// linkedList1.removeLast();

// console.log(linkedList1.toArray());

// const headLinkedList = new HeadLinkedList();
// const princeObject = { name: "Prince", age: 90 };
// headLinkedList.add(princeObject);
// headLinkedList.add("Frost bite");
// headLinkedList.add(14.9);
// headLinkedList.add({ vehicle: "car", color: "blue" });
// headLinkedList.add("Sausage");
// headLinkedList.add(17);

// console.log("Before deletion:", headLinkedList.toArray());

// headLinkedList.delete(princeObject);
// headLinkedList.delete("Frost bite");

// console.log("After deletion:", headLinkedList.toArray());

// console.log("Has 14.9:", headLinkedList.has(14.9));
// console.log("Has princeObject:", headLinkedList.has(princeObject));
// console.log("Has Sausage:", headLinkedList.has("Sausage"));
// console.log("Has Frost bite:", headLinkedList.has("Frost bite"));

// console.log("Find 14.9:", headLinkedList.find(14.9));
// console.log("Find princeObject:", headLinkedList.find(princeObject));
// console.log("Find Sausage:", headLinkedList.find("Sausage"));
// console.log("Find Frost bite:", headLinkedList.find("Frost bite"));

// headLinkedList.insertAfter("Nigeria", "Sausage");
// headLinkedList.removeFirst();
// headLinkedList.removeLast();

// console.log("Insert after sausage:", headLinkedList.toArray());
// console.log("Removed first:", headLinkedList.toArray());
// console.log("Removed last:", headLinkedList.toArray());

// console.log("Last node:", headLinkedList.getLast());

// console.log("First node:", headLinkedList.getFirst());

// console.log(headLinkedList.toArray());
