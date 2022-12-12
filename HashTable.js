export class HashTable {
  constructor() {
    this.size = 10;
    this.bucket = new Array(this.size).fill(null).map((e) => []);
  }

  hash(key) {
    let hash = 0;
    for (const letter of key) {
      hash += letter.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const hashKey = this.hash(key);
    const currentBucket = this.bucket[hashKey];
    const currentKey = currentBucket.find((e) => e?.key === key);
    if (currentKey) {
      currentKey.value = value;
    } else {
      currentBucket.push(new BucketKey(key, value));
    }
  }
  get(key) {
    const hashKey = this.hash(key);
    const currentBucket = this.bucket[hashKey];
    const currentKey = currentBucket.find((e) => e?.key === key);
    return currentKey?.value;
  }
  display() {
    return this.bucket;
  }
}

export class HashTable2 {
  constructor() {
    this.size = 100;
    this.bucket = new Array(this.size).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const letter of key) {
      hash += letter.charCodeAt(0);
    }
    return hash % this.size;
  }
  set(key, value) {
    if (!key) {
      return new Error("Key cannot be null");
    }
    let hashKey = this.hash(key);
    if (this.bucket[hashKey] === null || this.bucket[hashKey]?.key === key) {
      this.bucket[hashKey] = new BucketKey(key, value);
    } else {
      while (this.bucket[hashKey] !== null && hashKey <= this.size) {
        hashKey++;
      }
      if (this.bucket[hashKey] === null && hashKey <= this.size) {
        this.bucket[hashKey] = new BucketKey(key, value);
      }
    }
  }
  get(key) {
    if (!key) {
      return this.bucket;
    }
    let hashKey = this.hash(key);
    for (let i = hashKey; i < this.bucket.length; i++) {
      if (!this.bucket[i]) {
        continue;
      }
      if (this.bucket[i]?.key === key) {
        return this.bucket[i][value];
      }
    }
    return null;
  }
  display() {
    return this.bucket;
  }
}

class BucketKey {
  constructor(key, value) {
    (this.key = key), (this.value = value);
  }
}
