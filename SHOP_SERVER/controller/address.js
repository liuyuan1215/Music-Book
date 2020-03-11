const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/addAddress', async (ctx) => {
    const Address = mongoose.model('Address');
    const newAddress = new Address(ctx.request.body);
    await newAddress.save().then(() => {
        ctx.body = {
            code: 200,
            message: '保存成功'
        };
    }).catch(err => {
        console.log(err);
        ctx.body = {
            code: 500,
            message: err
        };
    });
});

router.get('/getAddress', async (ctx) => {
    const Address = mongoose.model('Address');
    await Address.find({ userId: ctx.query.userId }).exec().then(res => {
        ctx.body = res;
    });
});

module.exports = router;