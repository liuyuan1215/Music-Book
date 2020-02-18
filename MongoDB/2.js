var user1 = {
    name: "one",
    age: 20,
    hobby: ['aa','bb','cc'],
    pc: {
        brand: "apple",
        price: 10000
    }
}

var user2 = {
    name: "two",
    age: 15,
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

db.user.find(
    {age: {$gte: 15, $lte: 20}},
    {name: true, age: true, _id: false}
)

db.user.find(
    {age: {$in: [15,20]}},
    {name: true, age: true, _id: false}
)

db.user.find(
    {$or: [
        {age: {$gte: 20}},
        {'pc.brand': 'dell'}
    ]},
    {name: true, age: true, _id: false}
)

db.user.find(
    {$and: [
        {age: {$gte: 20}},
        {'pc.brand': 'dell'}
    ]},
    {name: true, age: true, _id: false}
)

db.user.find(
    {hobby: {$all:['aa']}},
    {_id: false}
)

db.user.find(
    {hobby: {$size: 3}},
    {name: true, age: true, _id: false}
)

db.user.find(
    {},
    {name: true, age: true, _id: false}
).limit(1).skip(0).sort({age: -1})