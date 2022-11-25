function recursiveBinarySearch(arr, low, high, target) {
  let mid = Math.floor((low + high) / 2);
  if (low > high) {
    return -1;
  }
  if (arr[mid] == target) {
     return mid;
  }
  if (target > arr[mid]) {
    return recursiveBinarySearch(arr, mid + 1, high, target);
  } else {
    return recursiveBinarySearch(arr, low, mid - 1, target);
  }
}

let arr = [1, 2, 3, 6, 7, 9];
let lowIndex = 0;
let highIndex = arr.length - 1;
console.log(recursiveBinarySearch(arr, lowIndex, highIndex, -1));

// Big O = O(logn) - Linear
