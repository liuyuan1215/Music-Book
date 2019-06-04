var People=require("./people.js");
var util=require("util");
function Teacher(){
	People.call(this);
	util.inherits(Teacher,People);
}

Teacher.prototype.teach = function(){
	console.log("teaching");
}

module.exports=Teacher;