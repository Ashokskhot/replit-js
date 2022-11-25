let obj = {
  name: "Ashok",
  age: 29,
  sayName: function() {
    console.log(this.name)
  }
}
obj.hobby = "Coding"
// delete obj.hobby

console.log(Object.entries(obj))

// Object - Big O time complexity

// insert - O(1)
// remove - O(1)
// access - O(1)
// search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)