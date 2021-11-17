const Product = require('../database/models/productModel');
const {formatMongoData} = require('../helper/dbhelper');
const mongoose = require('mongoose');

module.exports.createProduct = async (serviceData) =>{
    try {
        let product = new Product({
            ...serviceData
        });
        let result = await product.save();
        return result.toObject();
    } catch (error) {
        console.log('could not create product');
        throw new Error(error);
    }

}

module.exports.getAllProducts = async ({skip=0, limit=10 }) =>{
    try {
        let products = Product.find({}).skip(Number(skip)).limit(Number(limit));
        return products;
    } catch (error) {
        console.log('could not list product');
        throw new Error(error);
    }

}

module.exports.getProductById = async ({id}) =>{
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid id')
        }
        let products = Product.findById(id)
        if(!products) {
            throw new Error('Product not found')
        }
        return products;
    } catch (error) {
        console.log('could not list product');
        throw new Error(error);
    }

}