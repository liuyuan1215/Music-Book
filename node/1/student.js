var People=require("./people.js");
var util=require("util");
function Student(){
	People.call(this);
	util.inherits(Student,People);
}

Student.prototype.learn = function(){
	console.log("learning");
}

module.exports=Student;
