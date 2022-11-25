function bubbleSort(arr) {
  let count = 0;
  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
      count++;
    }
    if (!swapped) {
      break;
    }
  }
  console.log(count);
  return arr;
}

console.log(bubbleSort([-2, 7, 8, -6, 1, 3, 5, 8]));

// Big O = O(n^2) - Quadratic
