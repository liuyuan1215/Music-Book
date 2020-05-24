const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');

router.get('/insertProductInfo', async (ctx) => {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        console.log(data);
        let count = 0; // 计数器
        const Product = mongoose.model('Product');
        data.map((value, index) => {
            console.log(value);
            let product = new Product(value);
            // 随机生成类型 范围是1~10
            product.type = Math.floor(Math.random() * 10) + 1;
            product.save().then(() => {
                count++;
                console.log('成功' + count);
            }).catch(err => {
                console.log('失败啦:' + error);
            });
        });
    });
    ctx.body = '导入数据';
});

router.get('/getProductsByType', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({ type: ctx.query.typeId }).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then(res => {
        ctx.body = res;
    })
});

router.get('/getDetail', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.findOne({ _id: ctx.query.id }).exec().then(res => {
        ctx.body = res;
    })
});

router.get('/getProductList', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({}).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then(res => {
        ctx.body = res;
    })
});

router.get('/getProductList1', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({}).skip(parseInt(ctx.query.start1)).limit(parseInt(ctx.query.limit)).exec().then(res => {
        ctx.body = res;
    })
});

router.get('/getProductList2', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({}).skip(parseInt(ctx.query.start2)).limit(parseInt(ctx.query.limit)).exec().then(res => {
        ctx.body = res;
    })
});

router.get('/getProductLists', async (ctx) => {
    const Product = mongoose.model('Product');
    await Product.find({}).exec().then(res => {
        ctx.body = res;
    });
});

router.post('/delProduct', async (ctx) => {
    const Product = mongoose.model('Product');
    let body = ctx.request.body;
    let productId = body.productId;
    // console.log(productId);
    await Product.findOneAndDelete({ 'ObjectId': productId }).then(() => {
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

router.post('/addProduct', async (ctx) => {
    const Product = mongoose.model('Product');
    const newProduct = new Product(ctx.request.body);
    console.log('343434');
    await newProduct.save().then(() => {
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

module.exports = router;