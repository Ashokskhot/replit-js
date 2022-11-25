function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 4, 2, 5, 3], 9));

// Big O = O(n) - Linear
