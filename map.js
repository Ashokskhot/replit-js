// Map

// A map is an unordered collection of key-value pairs. Both keys and values can be of any data type.
// To retrieve the value you can use the corresponding key
// Maps are iterable. they can be used with a for of loop.
// Map Vs Object

// Objects are unordered where as maps are ordered.
// keys in objects can only be string or symbol type where as in maps, they can be of any type.
// An object has a prototype and may contain a few default keys which may collide with your own keys if you are not careful. A map on the other hand does not contain any keys by default

let map = new Map([['a', 1], ['b', 2]]);
map.set("c", 3)
map.delete("c")
console.log(map.has("b"));
console.log(map.size);
map.clear()

for (const [key, value] of map) {
  console.log(`${key}: ${value}`)
}