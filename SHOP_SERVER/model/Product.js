const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    // img: String,
    price: Number,
    company: String,
    city: String,
    type: Number,
    idnum: Number,
    // detailImg: String,
    fileList1: [{ content: String, message: String, status: String, file: Object }],
    fileList2: [{ content: String, message: String, status: String, file: Object }],
});

mongoose.model('Product', productSchema);