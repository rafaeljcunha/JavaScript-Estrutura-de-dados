class PilhaComObjeto {
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

const pilhaComObjeto = new PilhaComObjeto();

pilhaComObjeto.push(5);
pilhaComObjeto.push(8);
pilhaComObjeto.push(11);

console.log(pilhaComObjeto.count);
console.log(pilhaComObjeto.items);
console.log(pilhaComObjeto.size());
console.log(pilhaComObjeto.isEmpty());
console.log(pilhaComObjeto.toString());

pilhaComObjeto.pop();

console.log(pilhaComObjeto.peek());
console.log(pilhaComObjeto.items);

pilhaComObjeto.clear();

console.log(pilhaComObjeto.isEmpty());
