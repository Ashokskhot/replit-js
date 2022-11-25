function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}


console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(7));

// Big O = O(2^n)

// function fibonacci(n) {
//   const fib = [0, 1]
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2]
//   }
//   return fib
// }

// console.log(fibonacci(2).join(","));
// console.log(fibonacci(3).join(","));
// console.log(fibonacci(7).join(","));

// Big O = O(n) - Linear