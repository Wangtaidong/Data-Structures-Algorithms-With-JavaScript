//用数组实现队列
//构造函数
function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

//enqueue 方法向队尾添加一个元素
function enqueue(element){
  this.dataStore.push(element);
}

//dequeue方法从队首删除一个元素
function dequeue(){
  return this.dataStore.shift();
}

//front 方法读取队首元素
function front(){
  return this.dataStore[0];
}

//back方法读取队尾元素
function back(){
  return this.dataStore[this.dataStore.length-1];
}

//toString方法显示队内所有元素
function toString(){
  var restr = "";
  for(var i = 0; i <this.dataStore.length-1; i++){
    restr += this.dataStore[i] + "\n";
  }
  return restr;
}

//empty方判断队列是否为空
function empty(){
  if (this.dataStore.length == 0) {
    return true;
  }
  return false;
}


//测试程序
var q = new Queue();
q.enqueue("Merdith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
print(q.toString());
q.dequeue();
print(q.toString());
print("Front of queue: " + q.front());
print("Back of queue: " + q.back());



//使用队列对基数排序
 function distribute(nums,queues,n,digit){
   for (var i = 0; i < n; i++) {
     if (digit == 1) {
       queues[nums[i]%10].enqueue(nums[i]);
     }
     else{
       queues[Math.floor(nuns[i]/10)].enqueue(nums[i]);
     }
   }
 }

 function collect(queues,nums){
   var i = 0;
   for(var digit = 0; digit < 10; digit++){
     while(!queues[digit].empty()){
       nums[i++] = queues[digit].dequeue();
     }
   }
 }

 function dispArr(arr){
   for (var i = 0; i < arr.length; i++) {
     print(arr[i] + " ");
   }
 }
