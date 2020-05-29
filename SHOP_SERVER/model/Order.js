const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const orderSchema = new Schema({
    ID: ObjectId,
    productList: [{
        _id: String,
        name: String,
        fileList1: [{ content: String, message: String, status: String, file: Object }],
        price: Number,
        company: String,
        city: String,
        idnum: Number,
        fileList2: [{ content: String, message: String, status: String, file: Object }],
        val: Number
    }],
    userId: ObjectId,
    createDate: { type: Date, default: Date.now() }
});

mongoose.model('Order', orderSchema);