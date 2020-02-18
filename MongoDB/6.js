var startTime = (new Date()).getTime();
var db = connect('two');

var result = db.tel.find({tel: '13001536142'});
result.forEach(res => printjson(res));

var runTime = new Date().getTime() - startTime;
print('runTime is ' + runTime + 'ms');

// db.tel.ensureIndex({tel: 1})  //建完索引后查询事件变短，索引占空间数据太少不需要建索引，根据查询条件返回数据量较大也不需要索引