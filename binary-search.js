function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (target < arr[mid]) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 6, 7, 9], 7));

// Big O = O(logn)
