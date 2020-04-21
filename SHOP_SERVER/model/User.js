const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userName: { unique: true, type: String },
    // password: String,
    password: {
        type: String,    //字段类型为String类型
        max: 16,        //设置最大为100
        min: 6,          //设置最小为0
        required: true   //生成这个字段的时候是必须的
    },
    createDate: { type: Date, default: Date.now() }
});

userSchema.pre('save', function (next) {
    //随机生成salt, 10为迭代次数
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        })
    })
});

userSchema.methods = {
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            // console.log(_password, password);
            bcrypt.compare(_password, password, (err, isMatch) => {
                if (!err) resolve(isMatch);
                else reject(err);
            })
        })
    }
};

//发布模型
mongoose.model('User', userSchema);