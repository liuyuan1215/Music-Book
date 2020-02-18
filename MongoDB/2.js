var user1 = {
    name: "one",
    age: 10,
    hobby: ['aa','bb','cc'],
    pc: {
        brand: "apple",
        price: 10000
    }
}

var user2 = {
    name: "two",
    age: 10,
    hobby: ['aa','ee','ff'],
    pc: {
        brand: "dell",
        price: 5000
    }
}

var user3 = {
    name: "three",
    age: 10,
    hobby: ['zz','xx']
}

var db = connect('two');
db.user.insert([user1,user2,user3]);
print('insert success 3 data');