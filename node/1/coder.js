var People=require("./people.js");
var util=require("util");
function Coder(){
	People.call(this);
	util.inherits(Coder,People);
}

Coder.prototype.code = function(){
	console.log("coding");
}

module.exports=Coder;