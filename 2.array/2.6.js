//二维数组和多维数组

//2.6.1
Array.matrix = function(numrows,numcols,initial){
	var arr = [];
	for (var i = 0; i < numrows; ++i) {
		var columns = [];
		for (var j = 0; j< numcols; ++j) {
			columns[j] = initial;	
		}
		arr[i] = columns;
	}
	return arr;
}

var nums = Array.matrix(5,5,0);
print(nums);

//2.6.2
//toFixed(num) 方法可把 Number 四舍五入为指定(num)小数位数的数字。

var grades = [[89,77,78],[76,82,81],[91,94,89]];
for (var row = 0; row < grades.length; ++row) {
	var total = 0;
	var average = 0.0;
	for(var col = 0; col < grades[row].length; ++col){
		total += grades[row][col];
	}
	average = total/(grades[row].length);
	print("Student" + parseInt(row+1) + "average:" + average.toFixed(2));
}



