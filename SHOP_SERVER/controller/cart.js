const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/addCart', async (ctx) => {
    const Cart = mongoose.model('Cart');
    const cart = new Cart(ctx.request.body);
    await cart.save().then(() => {
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

router.get('/getCart', async (ctx) => {
    const Cart = mongoose.model('Cart');
    await Cart.find({ userId: ctx.query.userId }).populate('productId').exec().then(res => {
        ctx.body = res;
    });
});

router.post('/delCart', async (ctx) => {
    const Cart = mongoose.model('Cart');
    let body = ctx.request.body;
    let productId = body.productId;
    // console.log(productId);
    await Cart.findOneAndDelete({ 'ObjectId': productId }).then(() => {
        // console.log('11122');
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

router.post('/delAllproductList', async (ctx) => {
    const Cart = mongoose.model('Cart');
    let body = ctx.request.body;
    let userId = body.userId;
    await Cart.deleteMany({ 'userId': userId }).then(() => {
        ctx.body = {
            code: 200,
            message: '提交成功'
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