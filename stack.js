class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push("asdf");
console.log(stack.size());
console.log(stack.pop());
stack.print();
console.log(stack.peek());

// Time complexity of every operation is constant 