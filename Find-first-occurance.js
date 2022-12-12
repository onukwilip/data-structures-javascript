import { HashTable, HashTable2 } from "./HashTable.js";

const word = "base ball";
const findFirstWithArray = (word) => {
  for (const letter of word) {
    for (const repeat of word) {
      if (letter === repeat) {
        return letter;
      }
    }
  }
};

const findFirstWithObject = (word) => {
  const table = {};
  for (const letter of word) {
    if (table[letter]) {
      return letter;
    }
    table[letter] = 1;
  }
};

const findFirstWithHashTable = (word) => {
  const table = new HashTable();
  for (const letter of word) {
    if (table.get(letter)) {
      return letter;
    }
    table.set(letter, 1);
  }
};

const insertIntoHashTable = () => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa quis corporis cumque dolores, animi labore consectetur fuga deleniti voluptatibus?";
  const hashTable = new HashTable2();
  for (const char of lorem) {
    hashTable.set(char, char);
  }

  console.log(hashTable.display());
};

// console.log(findFirstWithHashTable(word));
insertIntoHashTable();
