//对象数组

/*function persion(){
	this.name=name;
}
me = new persion()
print(me.name);
alert(this.name)
*/



//1
function student(){
	this.grades = [];
	this.add = add;
	this.average = average;
}
function add(num){
	this.grades.push(num);
}
function average(){
	var total = 0;
	for (var i = 0; i < this.grades.length; ++i) {
		total += grades[i];
	}
	return total / this.grades.length;
}
 var stu1 = new student();
 stu1.add(30);
 stu1.add(40);
 print(stu1.average());

 //2

 var words = ["Just","to","do"];
 print(words.reverse());

//3
 function a(){
 	this.words = ["a","b","c","d","e"];
 	this.sentence = sentence;
 }
 function sentence(){
 	var word = "";
 	for (var i = 0; i < this.words.length; i++) {
 		word += this.words[i];
 	}
 	print(word);
 }