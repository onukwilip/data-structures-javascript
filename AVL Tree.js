import BinaryTree from "./BinaryTree.js";

class AVLTree extends BinaryTree {
  add(value) {
    super.add(value);

    let currentNode = this.root.find(value);

    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }
  }
  remove(value) {
    super.remove(value);

    this.balance(this.root);
  }

  balance(node) {
    // IF THE NODE'S BALANCE FACTOR IS LESS THAN -1
    if (node.balanceFactor < -1) {
      // IF THE CURRENT NODE RIGHT'S BALANCE FACTOR IS LESS THAN 0
      if (node.right.balanceFactor < 0) {
        // ROTATE THIS NODE TOWARDS THE LEFT (CALL this.rotateLeft())
        this.rotateLeft(node);
      }
      // IF THE CURRENT NODE RIGHT'S BALANCE FACTOR IS GREATER THAN 0
      else if (node.right.balanceFactor > 0) {
        // ROTATE THIS NODE TOWARDS THE RIGHT THEN TOWARDS THE LEFT (CALL this.rotateRightLeft())
        this.rotateRightLeft(node);
      }
    }
    // IF THE NODE'S BALANCE FACTOR IS GREATER THAN 1
    else if (node.balanceFactor > 1) {
      // IF THE CURRENT NODE LEFT'S BALANCE FACTOR IS LESS THAN 0
      if (node.left.balanceFactor < 0) {
        // ROTATE THIS NODE TOWARDS THE LEFT THEN TOWARDS THE RIGHT (CALL this.rotateLeftRight())
        this.rotateLeftRight(node);
      }
      // IF THE CURRENT NODE LEFT'S BALANCE FACTOR IS GREATER THAN 0
      else if (node.left.balanceFactor > 0) {
        // ROTATE THIS NODE TOWARDS THE RIGHT (CALL this.rotateRight())
        this.rotateRight(node);
      }
    }
  }

  rotateLeft(node) {
    const rightNode = node.right;
    node.right = null;

    if (node.parent) {
      node.parent.right = rightNode;
      node.parent.right.parent = node.parent;
    } else if (node === this.root) {
      this.root = rightNode;
      this.root.parent = null;
    }

    if (rightNode.left) {
      node.right = rightNode.left;
      node.right.parent = node;
    }

    rightNode.left = node;
    rightNode.left.parent = rightNode;
  }
  rotateRight(node) {
    const leftNode = node.left;
    node.left = null;

    if (node.parent) {
      node.parent.left = leftNode;
      node.parent.left.parent = node.parent;
    } else if (node === this.root) {
      this.root = leftNode;
      this.root.parent = null;
    }

    if (leftNode.right) {
      node.left = leftNode.right;
      node.left.parent = node;
    }

    leftNode.right = node;
    leftNode.right.parent = leftNode;
  }
  rotateLeftRight(node) {
    const leftNode = node.left;
    node.left = null;

    const leftRightNode = leftNode.right;
    leftNode.right = null;

    if (leftRightNode.left) {
      leftNode.right = leftRightNode.left;
      leftNode.right.parent = leftNode;
      leftRightNode.left = null;
    }

    node.left = leftRightNode;
    node.left.parent = node;

    leftRightNode.left = leftNode;
    leftRightNode.left.parent = leftRightNode;

    this.rotateRight(node);
  }

  rotateRightLeft(node) {
    const rightNode = node.right;
    node.right = null;

    const rightLeftNode = rightNode.left;
    rightNode.left = null;

    if (rightLeftNode.right) {
      rightNode.left = rightLeftNode.right;
      rightLeftNode.left.parent = rightNode;
      rightLeftNode.right = null;
    }

    node.right = rightLeftNode;
    node.right.parent = node;

    rightLeftNode.right = rightNode;
    rightLeftNode.right.parent = rightLeftNode;

    this.rotateLeft(node);
  }
}

const tree = new AVLTree();

tree.add(1);
tree.add(3);
tree.add(2);
tree.add(10);
tree.add(-5);
tree.add(100);
tree.add(33);
tree.add(-3);
tree.remove(2);
tree.remove(10);
console.log(tree.display());
