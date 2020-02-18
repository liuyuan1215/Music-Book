var userName = "asdf";
var time = Date.parse(new Date());
var data = {
    "username": userName,
    "esgisTime": time
};
var db = connect('one');
db.user.insert(data);
print('insert success');