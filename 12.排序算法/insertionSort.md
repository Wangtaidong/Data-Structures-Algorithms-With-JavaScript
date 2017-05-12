# 插入排序

插入排序类似于人类按数字或字母顺序对数据进行排序。例如，让班里的每个学生上交一张写有他的名字、学号以及个人简介的索引卡片。学生交上来的卡片是没有顺序的，但是想让这些卡片按字母顺序排列好，这样就很容易与班级花名册进行对照。

拿出第一张卡片，假如卡片上的名字是Smith，把它放在桌子左上角，然后拿起第二张卡片，这张卡片上的名字是Brown。把Smith右移，把Brown放在Smith前面。下一张是Williams，可以把它放在桌子最右边，而不用移动其他任何卡片。下一张是Acklin，这张卡片必须放在这些卡片的最前面，因此其他所有卡片必须向右移动一个位置来为Aklin这张卡片腾出位置。这就是插入排序的原理。

插入排序有两层循环，外循环将数组元素挨个移动，而内循环则对外循环选中的元素及他后面的元素进行比较，如果外循环中选中的元素比内循环中选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置。

```JavaScript
插入排序的代码
例：insertionSort()函数
function insertionSort() {
  var temp, inner;
  for (var outer = 0; outer < this.dataStore.length-1; outer++) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      inner--;
    }
    this.dataStore[inner] = temp;
  }
}


```
