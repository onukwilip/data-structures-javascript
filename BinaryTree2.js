class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertData(data) {
    if (!this.root) {
      this.root = new Node(data);
      return;
    }

    const currentNode = this.root;
    this.searchMutateTree(data, currentNode);
  }

  searchMutateTree(data, node) {
    if (data < node.data) {
      if (!node.left) {
        node.left = new Node(data);
        return;
      }

      return this.searchTree(node.left);
    } else if (data > node.data) {
      if (!node.right) {
        node.right = new Node(data);
        return;
      }
      return this.searchTree(node.right);
    } else {
      return false;
    }
  }

  findMin() {
    if (!this.root) {
      return null;
    }

    let currentNode = { ...this.root };
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  findMax() {
    if (!this.root) {
      return null;
    }

    let currentNode = { ...this.root };
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode;
  }

  find(data) {
    if (!this.root) {
      return null;
    }

    const currentNode = this.root;
    this.searchTree(data, currentNode);
  }

  searchTree(data, node) {
    if (data < node.data) {
      return this.searchTree(data, node.left);
    } else if (data > node.data) {
      return this.searchTree(data, node.right);
    } else if (data === node.data) {
      return { ...node };
    }
  }
}
