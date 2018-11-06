function List(){
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length =length;
	this.currPos.currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = tcontains;
}

function append(element){
	this.dataStore[this.listSize++] = element;
}

function find(element){
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

function remove(element){
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

function length(){
	return this.listSize;
}

function toString(){
	return this.dataStore;
}
//insert向列表中插入一个元素,插入到指定位置之后
function insert(element,after){
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1,0,element);
		this.listSize++;
		return true;
	}
	return false;
}

//clear 清空列表中所有元素
function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = 0;
	this.pos = 0;
}
//contains 判断给定的值是否在数组中

function contains(element){
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}

//遍历列表
function front(){
	this.pos = 0;
}
function end(){
	this.pos = this.listSize-1;
}
function prev(){
	if (this.pos > 0) {
		this.pos--;
	}
}
function next(){
	if (this.pos < this.dataStore-1) {
		this.pos++;
	}
}
function currPos(){
	return this.pos;
}
function moveTo(position){
	this.pos = position;
}
function getElement(){
	return this.dataStore[this.pos]
}

//测试
var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
names.append("Maiduo");
print(names.toString());
names.remove("Raymond");
print(names.toString());

//使用迭代器访问列表（遍历）例子
for(name.front();names.currPos < names.length();names.next()){
	print(names.getElement());
}
