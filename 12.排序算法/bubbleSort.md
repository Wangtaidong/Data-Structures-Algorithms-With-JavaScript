# 基本排序JavaScript编程

1. 冒泡排序

冒泡排序是最慢的排序算法之一，但也是一种最容易实现的排序算法。顾名思义，之所以叫冒泡排序是因为排序时数据像冒泡一样从数组的一端冒到另一端，我们来举个简单的例子说明一下冒泡排序的思想。

假如我们有一堆苹果，现在将他们排成一行（大小混乱）（4,2,3,5,1），我们要将他们从小到大进行排序，我们拿起左边第一个苹果(4)，假设假设他是最大的，他真的是最大的一个吗？现在我们要拿他(4)与其他苹果(2,3,5,1)一一进行比较,r如若左边的大，那么左右将进行交换。4与2比较，4大于2，所以4和2交换位置，变成(2,4,3,5,1),然后4与3比较，仍然交换位置（2,3,4,5,1），现在4和5比较，4小于5，不用交换，然后5和1比较，进行交换（2,3,4,1,5），最后，最大的苹果5便冒到了最右边，但是除过苹果5剩下的苹果里（2,3,4,1）还有最大的，我们只需重复上述过程便可。

这里我们要说明一下，上述每进行一行比较为一次外循环，与具体的某一个苹果比较为一次内循环。

下面我们将用代码进行展示冒泡排序。

```javascript
例：bubbleSort函数
function bubbleSort(){
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2;outer--) {
    for (var inner = 0; inner <= outer; inner++) {
      if (this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore,inner,inner + 1)；//假设这个方法我们已经实现
      }
    }
  }
}


```

下面是一个使用bubbleSort函数排序的例子：
```javascript
var numElements = 10;
var mynums = new Carray(numElements);//假设已经实现此构造函数，以及其他属性和方法
mynums.setData();
print(mynums.toString());
mynums.bubbleSort();
print(mynums.toString());
```
