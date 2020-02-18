function getTel(){
    var prefixArr = ['130','188','155','186','133','132','187'];
    var tel = prefixArr[parseInt(Math.random() * 7 )];
    for(var i = 0; i < 8; i++){
        tel += Math.floor(Math.random() * 7);
    }
    return tel;
}
// console.log(getTel());

var startTime = (new Date()).getTime();
var db = connect('two');
var tempInfo = [];
for(var i = 0;i < 1000000; i++){
    tempInfo.push({
        logintime: new Date(),
        tel: getTel()
    });
}
db.tel.insert(tempInfo);
var runTime = new Date().getTime() - startTime;
print('runTime is ' + runTime + 'ms');