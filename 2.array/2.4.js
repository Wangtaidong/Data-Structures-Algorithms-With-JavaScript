function factorial(number){
	if(number == 1){
		return number;
	}else{
		return number*factorial(number-1);
	}
}
print(factorial(5));

//add

var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
print(nums);


//delete
var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
print(nums);

//reverse  fanzhuan

var nums = [1,2,3,4,5];
nums.reverse();
print(nums);

//sort

function compare(num1,num2){
	return num1 - num2;
}

var nums = [3,1,2,100,4,200];
//nums.sort();
nums.sort(compare);
print(nums);

