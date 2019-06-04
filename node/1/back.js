var People=require('./people.js');
var Student=require('./student.js');
var Teacher=require('./teacher.js');
var Coder=require('./coder.js');

var people=new People();
people.eat();
people.sleep();

console.log('--------------')
var student=new Student();
people.eat();
people.sleep();
student.learn();

console.log('--------------')
var teacher=new Teacher();
teacher.eat();
teacher.sleep();
teacher.teach();

console.log('--------------')
var coder=new Coder();
coder.eat();
coder.sleep();
coder.code();