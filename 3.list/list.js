class List {
  constructor() {
    this._length = 0; // 内部记录长度
    this._pos = 0; // （指针当前位置）
    this.dataStore = [];
  }

  // 找到第一个就返回下标位置，没找到返回-1
  find(element) {
    for (let i = 0; i < this.dataStore.length; i ++) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  // 删除元素,并以数组形式返回删除的元素
  remove (element) {
    // 先找到元素位置
    const foundAt = this.find(element);
    if (foundAt === -1) return false;

    const delArr = this.dataStore.splice(foundAt, 1);
    this._length --;

    return delArr;
  }

  // 获取列表长度
  length() {
    return this._length;
  }

  toString() {
    return this.dataStore;
  }

  // 向列表尾部插入元素
  append(element) {
    this.dataStore[this._length ++] = element;
  }

  // 向列表指定位置之后插入一个元素
  insert(element, after) {
    this.dataStore.splice(after + 1, 0, element);
    this._length + 1;
  }

  // 清空列表
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this._length = 0;
    this._pos = 0;
  }

  // 判断给定值是否在列表中，类似于find方法
  contains(element){
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  //指针指向头部
  front() {
    this._pos = 0;
  }

  // 指针指向尾部
  end() {
    this._pos = this._length - 1;
  }

  // 指针指向前一个元素
  prev(){
    if (this._pos > 0) {
      this._pos--;
    }
  }

  // 指针指向下一个元素
  next(){
    if (this._pos < this._length - 1) {
      ++ this._pos;
    }
  }

  // 返回当前指针位置
  currPos() {
    return this._pos;
  }

  // 返回当前指针位置的元素
  getElement() {
    return this.dataStore[this._pos]
  }

  // 向指定位置移动指针
  moveTo(position) {
    this._pos = position;
  }
}

//测试
const names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
names.append("Maiduo");
// console.log(names.toString());
// names.remove("Raymond");
// console.log(names.toString());
// console.log(names.length());
// console.log(names.find('Maiduo'));
// console.log(names.contains('Barbara'));
// names.insert('Wstreet', 9)
// console.log(names.toString());
console.log(names.length());
// names.clear();
console.log(names.currPos());

//使用迭代器访问列表（遍历）例子
// for(names.front(); names.currPos() < names.length(); names.next()) {
//   console.log(names.currPos(), names.getElement());
// }
