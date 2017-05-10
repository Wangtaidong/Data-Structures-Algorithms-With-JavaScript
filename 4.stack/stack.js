function Stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

//向栈中压入一个元素
function push(element){
  this.dataStore[this.top++] = element;
}
//从栈中弹出一个元素，并作为返回值(返回的值也即弹出的元素)
function pop(){
  return this.dataStore[--this.top];//top=数组下标+1，（有一个元素dataStore[0]时top=1）
}
//返回数组第top-1个位置的元素
function peek(){
  return this.dataStore[this.top-1];
}
function length(){
  return this.top;
}
function clear(){
  this.top = 0;
}
