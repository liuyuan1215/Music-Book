/*(1)
function Person(){
	this.sleep=function(){
		console.log("sleeping");
	};
	this.eat=function(){
		console.log("eating");
	}
}

module.exports=Person;*/

/*(2)
var person = new Person();
module.exports = person;*/

/*(2)
module.exports={
	'sleep':function(){
		console.log('I am sleeping');
	},
	'eat':function(){
		console.log('I am eating');
	}
}*/

/*(3)
module.exports=['ly','lt','zyl'];*/

module.exports={
	a:['ly','lt','zyl']
};