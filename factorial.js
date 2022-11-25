function recursiveFactorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(2));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

// Big O = O(n) - Linear

// let factorial = function(n) {
//   let fact = 1;
//   for (let i = 2; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(5));

// Big O = O(n) - Linear
