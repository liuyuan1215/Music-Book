const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/submitOrder', async (ctx) => {
    const Order = mongoose.model('Order');
    const order = new Order(ctx.request.body);
    await order.save().then(() => {
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

router.get('/getOrder', async (ctx) => {
    const Order = mongoose.model('Order');
    await Order.find({ userId: ctx.query.userId }).populate('userId').exec().then(res => {
        ctx.body = res;
    });
});

module.exports = router;