class Stack {
  constructor() {
    this.dataStore = [];
    this._top = 0; // 栈顶元素是栈中第几个,也代表栈的 长度
  }

  // 向栈中压入一个元素
  push(element) {
    this.dataStore[this._top ++] = element;
  }

  // 从栈顶弹出一个元素，并作为返回值
  pop() {
    if (this._top <= 0) return;
    return this.dataStore[-- this._top];
  }

  //返回栈第top个位置（栈顶）的元素,不会改变栈的长度
  peek() {
    return this.dataStore[this._top - 1]
  }

  length() {
    return this._top;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this._top = 0;
  }
}

const stack = new Stack();
const top = stack.pop();
console.log(top) // undefined
stack.push('MAiduo');
console.log(stack)