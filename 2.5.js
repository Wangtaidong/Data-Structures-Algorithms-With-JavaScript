//diedai

//forEach()

function square(num){
	print(num,num*num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

//every()

function isEven(num){
	return num % 2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if(even){
	print("all number are even");
}else{
	print("not all number are even");
}


//some()

function isEven(num){
	return num % 2 == 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if(someEven){
	print('some numbers are even');
}else{
	print('no numbers are even');
}

nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if(someEven){
	print("some numbers are even");
}else{
	print("no numbers are even");
}

//reduce()

function add(runningTotal,currenValue){
	return runningTotal + currenValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
print(sum);


function concat(accumulatedString,item){
	return accumulatedString + item;
}

var words = ["the ","quick ","brown ","fox "];
var sentence = words.reduce(concat);
print(sentence);

//reduceRight()从右到左

//map()对数组中每个元素执行curve函数，并且产生一个新数组newgrades
function curve(grade){
	return grade += 5;
}

var grades = [77,68,81,92,83];
var newgrades = grades.map(curve);
print(newgrades);

//map()对数组中每个元素执行first函数，并且产生一个新数组acronym
function first(word){
	return word[0];
}

var words = ["for","you","information"];
var acronym = words.map(first);
print(acronym.join(""));



//filter()
//one
function isEven(num){
	return num % 2 == 0;
}

function isOdd(num){
	return num % 2 != 0;
}

var nums = [];
for (var i = 0; i < 20; ++i) {
	nums[i] = i+1;
}

var evens = nums.filter(isEven);
print("Even numbers:");
print(evens);
var odds = nums.filter(isOdd);
print("Odd numbers:");
print(odds);



//two

function passing(num){
	return num >= 60;
}

var grades = [];
for (var i = 0; i < 20; ++i){
	//floor()函数执行向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。
	//random()在0.0 ~ 1.0 之间产生一个伪随机数。
	grades[i] = Math.floor(Math.random()*101);

}

var passGrades = grades.filter(passing);
print("All grades:"+passGrades);
print("Passing grades:"+passGrades);

//three
//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
//如果要检索的字符串值没有出现，则该方法返回 -1。
function afterc(str){
	if (str.indexOf("cie") > -1) {
		return true;
	}
	return false;
}
var words = ["recieve","decevie","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
print(misspelled);