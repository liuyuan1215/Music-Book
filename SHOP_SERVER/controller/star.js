const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/addStar', async (ctx) => {
    const Star = mongoose.model('Star');
    const star = new Star(ctx.request.body);
    await star.save().then(() => {
        ctx.body = {
            code: 200,
            message: '收藏成功'
        };
    }).catch(err => {
        console.log(err);
        ctx.body = {
            code: 500,
            message: err
        };
    })
});

router.get('/getStar', async (ctx) => {
    const Star = mongoose.model('Star');
    await Star.find({ userId: ctx.query.userId }).populate('productId').exec().then(res => {
        ctx.body = res;
    });
});

router.post('/delStar', async (ctx) => {
    const Star = mongoose.model('Star');
    let body = ctx.request.body;
    let ID = body.ID;
    console.log(ID);
    await Star.findOneAndDelete({ '_id': ID }).then(() => {
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

router.post('/delAllStar', async (ctx) => {
    const Star = mongoose.model('Star');
    let body = ctx.request.body;
    let userId = body.userId;
    // console.log(userId);
    await Star.deleteMany({ 'userId': userId }).then(() => {
        // console.log('7788');
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