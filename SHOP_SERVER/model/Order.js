const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const orderSchema = new Schema({
    ID: ObjectId,
    productList: [{
        _id: String,
        name: String,
        img: String,
        price: Number,
        company: String,
        city: String,
        idnum: Number,
        detailImg: String
    }],
    userId: ObjectId,
    createDate: { type: Date, default: Date.now() }
});

mongoose.model('Order', orderSchema);