class BinarySearch {
  constructor() {}
  binarySearchIteration(array, value) {
    if (!Array.isArray(array)) {
      throw new Error("The array parameter must be an array");
    }

    let left = 0;
    let right = array?.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (value === array[mid]) {
        return mid;
      } else if (value < array[mid]) {
        right = mid - 1;
      } else if (value > array[mid]) {
        left = mid + 1;
      }
    }
    return -1;
  }

  binarySearchRecursive(array, value, left, right) {
    if (!Array.isArray(array)) {
      throw new Error("The array parameter must be an array");
    }
    if (left > right) {
      return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (value === array[mid]) {
      return mid;
    } else if (value < array[mid]) {
      return this.binarySearchRecursive(array, value, left, mid - 1);
    } else if (value > array[mid]) {
      return this.binarySearchRecursive(array, value, mid + 1, right);
    }
    return -1;
  }
}

const binary = new BinarySearch();
const testArray = [2, 45, 12, 90, 7, 43, 8, 928, 19, 78, 90, 18, 38, 27];
testArray.sort((a, b) => a - b);
const value = 45;
const found = binary.binarySearchIteration(testArray, value);
const foundRecursive = binary.binarySearchRecursive(
  testArray,
  value,
  0,
  testArray.length - 1
);
console.log(`Binary search iteration for ${value} is: ${found}`);
console.log(`Binary search recursive for ${value} is: ${foundRecursive}`);
console.log(`The value of index (iteration) ${found} is: ${testArray[found]}`);
console.log(
  `The value of index (recursive) ${foundRecursive} is: ${testArray[foundRecursive]}`
);
console.log(testArray);
