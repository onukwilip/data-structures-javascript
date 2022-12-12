class Node {
  constructor(value, parentNode = null) {
    (this.value = value), (this.childern = []), (this.parent = parentNode);
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

  display() {
    return this.root;
  }
}

const fileSys = new Tree("/");
// const documents = fileSys.root.addChild("/documents");
// const movies = fileSys.root.addChild("/movies");
// const games = fileSys.root.addChild("/games");
// documents.node.addChild("/corel draw");
// documents.node.addChild("/microsoft office");
// documents.node.addChild("/corel photopaint");
// const marvel = movies.node.addChild("/Marvel studios");
// const cod = games.node.addChild("/call of duty");
// marvel.node.addChild("Thor.mp4");
// marvel.node.addChild("Avengers.mp4");
// marvel.node.addChild("Thor.mp4");
// cod.node.addChild("Level1.exe");
// cod.node.addChild("Level5.exe");
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
fileSys.remove("games");

console.log(fileSys.display());
