var db = connect('two');
var userList = db.user.find();
userList.forEach(function(user){
    printjson(user);
})

//load('./MongoDB/4.js')  