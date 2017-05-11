# 基本排序JavaScript编程

2 .选择排序

选择排序从数组的开头开始，将第一个元素和其他元素进行比较，检查完所有的元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续。这个过程一直进行，当进行到数组的第二个位置时，所有的元素便完成了排序。

选择排序会用到嵌套循环。外循环从数组第一个元素移动到倒数第二个元素；内循环从数组第二个元素移动到倒数第一个元素，查找比当前外循环所指向的元素小的元素。每次内循环迭代后，数组中最小的值都会被赋值到合适的位置。

展示selectionSort函数的代码
```JavaScript
function selectionSort(){
  var min, temp;
  for (var outer = 0; outer < this.dataStore.length-2; outer++) {
    min = outer;
    for (var iner = outer+1; iner < this.dataStore.length-1; iner++ ){
      if (this.dataStore[iner] < this.dataStore[min]) {
        min = iner;
      }
      swap(this.dataStore,outer,min);//假设该函数已经实现
    }
  }
}
```


