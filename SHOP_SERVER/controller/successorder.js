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

router.get('/getSuccessOrders', async (ctx) => {
    const Order = mongoose.model('Successorder');
    await Order.find({}).exec().then(res => {
        ctx.body = res;
    });
});

router.post('/updateMessage', async (ctx) => {
    const Order = mongoose.model('Successorder');
    let body = ctx.request.body;
    let orderId = body.orderId;
    await Order.updateOne({ 'ObjectId': orderId },{$set: {statu: '已处理'}}).then(() => {
        ctx.body = {
            code: 200,
            message: '删除成功'
        };
    }).catch(err => {
        console.log(err)
        ctx.body = {
            code: 500,
            message: err
        };
    });
})

module.exports = router;