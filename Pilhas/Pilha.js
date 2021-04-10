class Pilha {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
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

  clear() {
    this.items = [];
  }
}

const pilha = new Pilha();

console.log(pilha.isEmpty());

pilha.push(5);
pilha.push(8);

console.log(pilha.peek());

pilha.push(11);

console.log(pilha.size());
console.log(pilha.isEmpty());

pilha.push(15);

console.log(pilha.peek());

pilha.pop();
pilha.pop();

console.log(pilha.size());

pilha.clear();

console.log(pilha.isEmpty());
