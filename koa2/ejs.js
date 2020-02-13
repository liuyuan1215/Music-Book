const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path');

//加载模板
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(async ctx => {
    let title = 'one';
    await ctx.render('index', {
        title,
        list: [
            {name: 'aa', num: 01},
            {name: 'bb', num: 02},
            {name: 'cc', num: 03}
        ]
    });
});

app.listen(3000, () => {
    console.log('服务开启成功在3000端口');
});