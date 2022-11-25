// Set

// Set is a data structure that can hold collection of values. The values however must be unique
// Set can contain a mix of different data types. you can store strings, Boolean, numbers and even objects all in the same set
// Sets are dynamically sized. you don't  have to declare the size of a set before creating it.
// Sets do not maintain an insrtion order.
// Sets are iterabls. They can be used with for of loop

// Set VS Array

// Arrays can contain duplicate values where as sets can not.
// insertion order maintained in arrays but it is not the case with sets.
// Searching and deleting element in the sets is faster compare to arrays

let set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4))
set.delete(4)
console.log(set.size)
set.clear();

for (const item of set) {
  console.log(item);
}