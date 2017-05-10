//基于对象的链表
/*
Node类包含两个属性：element用来保存节点上的数据，
next用来保存指向下一节点的链接
使用构造函数创造节点
*/
function Node(element){
  this.element = element;
  this.next = null;
}

/*
LList类提供了对链表进行操作的方法，包括插入、删除、查找
LList类还有一个属性，那就是使用一个Node对象来保存该链表的头结点
*/
function LList(){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
}

//插入新节点之前要用辅助函数find找到插入的位置
function find(item){
  var currNode = this.head;
  while(currNode.elememt != item){
    currNode = currNode.next;
  }
  return currNode;
}

//将newElement插入到item后边
function insert(newElement,item){
  var newNode = new Node("newElement");//新节点
  var current = this.find(item); //查找要插入位置的前驱
  newNode.next = current.next;
  current.next = newNode;
}

//display方法显示链表中元素
function display(){
  var currNode = this.head;
  while(!(currNode.next == null)){
    print(currNode.next.element);
    currNode = currNode.next;
  }
}

//从链表中删除一个节点，需要找到待删除节点前面的节点
function findPrevious(item){
  var currNode = this.head;
  while(!(currNode.next == null) &&  currNode.next.element != item){
    currNode = currNode.next;
  }
  return currNode;
}
//删除节点
function remove(item){
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode = prevNode.next.next;
  }
}
