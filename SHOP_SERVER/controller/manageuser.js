const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/registManageUser', async (ctx) => {
    // 获取model
    const User = mongoose.model('Manageuser');
    // 接收post请求封装成user对象
    let newUser = new User(ctx.request.body);
    // 使用save保存用户信息
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: '注册成功'
        };
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: err
        };
    });
});

router.post('/loginManageUser', async (ctx) => {
    // 接收前端发送的数据
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;
    // 引入model
    const User = mongoose.model('Manageuser');
    // 查询用户名是否存在 存在再去比较密码
    await User.findOne({ userName: userName }).exec().then(async (result) => {
        if (result) {
            let newUser = new User();
            await newUser.comparePassword(password, result.password)
                .then(isMatch => {
                    // 登录成功
                    if (isMatch) {
                        ctx.body = {
                            code: 200,
                            message: '登录成功',
                            userInfo: result
                        };

                    } else {// 登录失败
                        ctx.body = {
                            code: 201,
                            message: '登录失败'
                        };
                    }
                })
        } else {
            ctx.body = {
                code: 201,
                message: '用户名不存在'
            };
        }
    })
});

router.post('/exitManageUser', async (ctx) => {
    let body = ctx.request.body;
    let userId = body.userId;
    const User = mongoose.model('Manageuser');
    try {
        let user = await User.findOne({ _id: userId });
        if (user === null) {
            ctx.response.body = {
                code: 0,
                data: null,
                message: '用户不存在'
            };
            return;
        }
        isSignin = false;
        ctx.response.body = {
            code: 200,
            data: user,
            message: '退出登录成功'
        };
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;