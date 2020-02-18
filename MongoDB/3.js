// var newHobby = ['chi','he','wan'];
// db.user.update({name: 'one'}, {$addToSet: {hobby: {$each: newHobby}}})

var modify = {
    findAndModify: "user",
    query: {name: "one"},
    update: {$set: {age: 22}},
    new: true   // true ,age返回22，false ,age返回旧的结果
}

var result = db.runCommand(modify);
printjson(result);