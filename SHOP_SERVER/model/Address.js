const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const addressSchema = new Schema({
    addressId: ObjectId,
    name: String,
    tel: Number,
    value: String,
    address: String,
    postal: Number,
    userId: ObjectId,
    createDate: { type: Date, default: Date.now() }
});

//发布模型
mongoose.model('Address', addressSchema);