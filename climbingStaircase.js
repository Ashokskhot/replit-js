function climbingStaircase(n) {
  // if (n <= 2) {
  //   return n;
  // }
  // return climbingStaircase(n-1) + climbingStaircase(n-2);

  let noOfWays = [1, 2];

  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
  }
  return noOfWays[n-1];
}

console.log(climbingStaircase(5));

// Big O = O(n) - Linear
