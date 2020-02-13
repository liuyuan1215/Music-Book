const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if(ctx.url === '/abc'){
        ctx.cookies.set(
            'name', 'abc', {
                domain: 'localhost',
                path: '/abc',
                expires: new Date('2020-02-14'),
                httpOnly: false,
                overwrite: false
            }
        );
        ctx.body = 'cookie yes'
    } else {
        ctx.body = 'cookie no'
    }
});

app.listen(3000, () => {
    console.log('服务开启成功在3000端口');
});