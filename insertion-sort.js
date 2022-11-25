function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    // for (j = i - 1; j >= 0; j--) {
    //   if (arr[j] > numberToInsert) {
    //     arr[j + 1] = arr[j];
    //   }
    // }
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(insertionSort([-2, 7, 8, -6, 1, 3, 5, 8]));

// Big O = O(n^2) - Quadratic
