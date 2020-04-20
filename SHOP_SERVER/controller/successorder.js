const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/successOrder', async (ctx) => {
    const Successorder = mongoose.model('Successorder');
    const successorder = new Successorder(ctx.request.body);
    await successorder.save().then(() => {
        ctx.body = {
            code: 200,
            message: '添加成功'
        };
    }).catch(err => {
        console.log(err);
        ctx.body = {
            code: 500,
            message: err
        };
    })
});

router.get('/getSuccessOrder', async (ctx) => {
    const Order = mongoose.model('Successorder');
    await Order.find({ userId: ctx.query.userId }).populate('userId').exec().then(res => {
        ctx.body = res;
    });
});

module.exports = router;