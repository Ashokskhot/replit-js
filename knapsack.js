function max(a, b) {
  return (a > b) ? a : b;
}

//  Knapsack dynamic programming approach
function knapsack(W, wt, val, n) {
  let i, j;
  let k = new Array(n + 1);

  for (i = 0; i <= n; i++) {
    k[i] = new Array(W + 1);
    for (j = 0; j <= W; j++) {
      if (i == 0 || j == 0) {
        k[i][j] = 0;
      } else if (wt[i - 1] <= j) {
        k[i][j] = max(val[i - 1] + k[i - 1][j - wt[i - 1]], k[i - 1][j]);
      } else {
        k[i][j] = k[i - 1][j];
      }
    }
  }
  return k[n][W];
}
let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;
console.log(knapsack(W, wt, val, n));

// Big O = O(2^n)
