const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
        min:0
    },
    category:{
        type:String,
        lowercase:true,
        enum : ['fruit', 'vegetables', 'dairy']
    }
})

const Product = mongoose.model('Product', productSchema); // therefore collection name is 'products'

module.exports = Product;