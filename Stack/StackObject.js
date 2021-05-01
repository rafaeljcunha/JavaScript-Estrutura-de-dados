class StackObject {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let index = 1; index < this.count; index++) {
      objString = `${objString}, ${this.items[index]}`;
    }
    return objString;
  }
}

const stackObject = new StackObject();

stackObject.push(5);
stackObject.push(8);
stackObject.push(11);

console.log(stackObject.count);
console.log(stackObject.items);
console.log(stackObject.size());
console.log(stackObject.isEmpty());
console.log(stackObject.toString());

stackObject.pop();

console.log(stackObject.peek());
console.log(stackObject.items);

stackObject.clear();

console.log(stackObject.isEmpty());
