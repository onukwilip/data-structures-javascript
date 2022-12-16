class Node {
  constructor(value, parentNode = null) {
    this.value = value;
    this.childern = [];
    this.parent = parentNode;
  }

  addChild(path) {
    if (path === null) {
      return;
    }

    const splitPath = path.split("/");

    if (splitPath?.length <= 0) {
      return;
    }
    if (splitPath?.length === 1) {
      if (this.childern.find((eachNode) => eachNode?.value === splitPath[0])) {
        return;
      }

      const node = new Node(splitPath[0], this);
      this.childern.push(node);
      return { node, index: this.childern.length - 1 };
    }

    const foundExistingNode = this.childern.find(
      (eachNode) => eachNode?.value === splitPath[0]
    );

    if (foundExistingNode) {
      foundExistingNode.addChild(splitPath?.splice(1).join("/"));
    } else {
      const node = new Node(splitPath[0], this);
      node.addChild(splitPath?.splice(1).join("/"));
      this.childern.push(node);
      return { node, index: this.childern.length - 1 };
    }
  }
  removeChild(path) {
    if (path === null) {
      return;
    }

    const splitPath = path.split("/");

    if (splitPath?.length <= 0) {
      return;
    }
    if (splitPath?.length === 1) {
      const existingChildIndex = this.childern.findIndex(
        (eachChild) => eachChild?.value === splitPath[0]
      );
      if (existingChildIndex < 0) {
        throw new Error(`Could not find leaf Node '${splitPath[0]}'`);
      }
      this.childern.splice(existingChildIndex, 1);
    }
    if (splitPath?.length > 1) {
      const existingNode = this.childern.find(
        (eachChild) => eachChild?.value === splitPath[0]
      );

      if (existingNode) {
        existingNode.removeChild(splitPath.splice(1).join("/"));
      } else {
        throw new Error(`Could not find parent Node '${splitPath[0]}'`);
      }
    }
  }

  find(value) {
    // console.log(this.value, "~");
    for (const node of this.childern) {
      if (node.value === value) {
        return node;
      }

      const nestedNode = node.find(value);
      if (nestedNode) {
        return nestedNode;
      }
    }
  }

  findUsingBredth(value) {
    // console.log(this.value, "~");
    for (const node of this.childern) {
      if (node.value === value) {
        return node;
      }
    }
    for (const node of this.childern) {
      const nestedNode = node.findUsingBredth(value);
      if (nestedNode) {
        return nestedNode;
      }
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addChild(path);
  }
  remove(path) {
    this.root.removeChild(path);
  }

  find(value) {
    if (this.root.value === value) {
      return this.root;
    }

    return this.root.findUsingBredth(value);
  }
  display() {
    return this.root;
  }
}

const fileSys = new Tree("/");
fileSys.add("documents");
fileSys.add("documents/corel draw/banner.cdr");
fileSys.add("documents/corel draw/logo.cdr");
fileSys.add("documents/microsoft office/untitled(1).docx");
fileSys.add("documents/microsoft office/untitled(1).docx");
fileSys.add("documents/corel photopaint");
fileSys.add("movies/Marvel studios");
fileSys.add("movies/Marvel studios/Thor.mp4");
fileSys.add("movies/Marvel studios/Avengers.mp4");
fileSys.add("movies/Marvel studios/Thor.mp4");
fileSys.add("games/call of duty/Level1.exe");
fileSys.add("games/call of duty/Level2.exe");
// fileSys.remove("games/call of duty/Level2.exe");
// fileSys.remove("games");

console.log(fileSys.display());
console.log("Find 'Thor.mp4'", fileSys.find("Thor.mp4"));
console.log("Find 'movies'", fileSys.find("movies"));
console.log("Find 'documents'", fileSys.find("documents"));
console.log("Find 'Marvel studios'", fileSys.find("Marvel studios"));
