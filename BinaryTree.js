export class Node {
  constructor(value, parent = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  get leftDepth() {
    if (!this.left) {
      return 0;
    }
    return this.left.depth + 1;
  }

  get rightDepth() {
    if (!this.right) {
      return 0;
    }
    return this.right.depth + 1;
  }

  get depth() {
    return Math.max(this.leftDepth, this.rightDepth);
  }

  get balanceFactor() {
    return this.leftDepth - this.rightDepth;
  }

  add(value) {
    if (this.value === null) {
      this.value = value;
      return;
    }
    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
        return;
      }
      this.left = new Node(value, this);
      return;
    }
    if (value > this.value) {
      if (this.right) {
        this.right.add(value);
        return;
      }
      this.right = new Node(value, this);
      return;
    }
    if (value === this.value) {
      return;
    }
  }

  remove(value) {
    //SEARCH FOR THE NODE TO BE REMOVED
    const identifiedNode = this.find(value);
    //IF THE NODE DOESN'T EXIST
    if (!identifiedNode) {
      throw new Error(`Could not find Node with value '${value}'`);
    }
    //IF NODE EXISTS AND THE LEFT AND RIGHT NODES ARE BOTH LEAF NODES
    if (!(identifiedNode.left && identifiedNode.right)) {
      const identifiedParent = identifiedNode.parent;
      identifiedParent.removeChild(identifiedNode);
      return;
    }
    //IF NODE EXISTS, BUT BOTH THE LEFT AND RIGHT ARE SUB-TREES(HAVE CHILDREN)
    if (identifiedNode.left && identifiedNode.right) {
      // FIND THE NEXT BIGGER NODE, BY SEARCHING THE RIGHT NODE LEFT NODES
      const nextBiggerNode = identifiedNode.right.findNext();
      // IF THE NEXTBIGGERNODE IS NOT THE RIGHT NODE(THE RIGHT NODE HAS LEFT NODES AS CHILDREN)
      if (nextBiggerNode.value !== identifiedNode.right.value) {
        //CALL THE RECURSIVE REMOVE FUNCTION TO REMOVE THE NEXT BIGGER NODE
        this.remove(nextBiggerNode.value);
        //SET THE CURRENT NODE'S VALUE TO THE NEXT BIGGER NODE'S VALUE
        identifiedNode.value = nextBiggerNode.value;
      }
      //ELSE
      else {
        // REPLACE THE CURRENT NODE'S VALUE WITH RIGHT NODE (EXCEPT IT'S LEFT NODE)
        identifiedNode.value = identifiedNode.right.value;
        identifiedNode.right = identifiedNode.right.right;
      }
    }
    //IF NODE EXISTS, BUT EITHER THE LEFT OR RIGHT IS A SUB-TREE(HAVE CHILDREN)
    else {
      //GET THE CHILD NODE THAT IS A SUB-ROOT
      const childNode = identifiedNode.left || identifiedNode.right;
      //REPLACE THE IDENTIFIED NODE VALUES WITH THE CHILD NODE VALUES
      identifiedNode.left = childNode.left;
      identifiedNode.right = childNode.right;
      identifiedNode.value = childNode.value;
    }

    //IF THE CURRENT NODE HAS LEFT CHILDREN
    if (identifiedNode.left) {
      //SET THE PARENT OF IT'S LEFT CHILD TO THE CURRENT NODE
      identifiedNode.left.parent = identifiedNode;
    }
    //IF THE CURRENT NODE HAS RIGHT CHILDREN
    if (identifiedNode.right) {
      //SET THE PARENT OF IT'S RIGHT CHILD TO THE CURRENT NODE
      identifiedNode.right.parent = identifiedNode;
    }
  }

  find(value) {
    if (this.value === value) {
      return this;
    }
    if (value < this.value && this.left) {
      return this.left.find(value);
    }
    if (value > this.value && this.right) {
      return this.right.find(value);
    }
  }

  removeChild(node) {
    if (this.left && this.left === node) {
      this.left = null;
      return;
    }
    if (this.right && this.right === node) {
      this.right = null;
      return;
    }
  }

  findNext() {
    if (!this.left) {
      return this;
    }

    return this.left.findNext();
  }
}

export default class BinaryTree {
  constructor() {
    this.root = new Node(null);
  }
  add(value) {
    this.root.add(value);
  }
  remove(value) {
    this.root.remove(value);
  }
  find(value) {
    return this.root.find(value);
  }
  display() {
    return this.root;
  }
}

const binaryTree = new BinaryTree();
binaryTree.add(20);
binaryTree.add(2);
binaryTree.add(37);
binaryTree.add(50);
binaryTree.add(12);
binaryTree.add(14);
binaryTree.add(11);
binaryTree.add(13);
binaryTree.add(9);
binaryTree.remove(12);
console.log(binaryTree.display());
console.log(binaryTree.find(12));
