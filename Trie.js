class TrieNode {
  constructor() {
    this.value = null;
    this.children = new Array(26);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(key, value) {
    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;
      if (!node.children[alphabetIndex]) {
        const newNode = new TrieNode();
        node.children[alphabetIndex] = newNode;
      }

      node = node.children[alphabetIndex];
    }

    node.value = value;
  }

  find(key) {
    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].charCodeAt(0) - 97;
      if (!node.children[alphabetIndex]) {
        return undefined;
      }

      node = node.children[alphabetIndex];
    }

    if (!node.value) {
      return undefined;
    }

    return node;
  }

  remove(key) {
    const node = this.find(key);

    if (!node) {
      return node;
    }

    node.value = null;
  }
}

const trie = new Trie();
trie.insert("prince", { name: "Prince", age: 29 });
trie.insert("apple", "fruit");
trie.insert("applet", "Unknown meaning");
trie.insert("app", ["Facebook", "Whatsapp", "Twitter"]);
trie.insert("fruits", ["Apple", "Orange", "Mango"]);
trie.remove("apple");
console.log(trie);
console.log("Find 'app'", trie.find("app"));
console.log("Find 'apple'", trie.find("apple"));
console.log("Find 'applet'", trie.find("applet"));
