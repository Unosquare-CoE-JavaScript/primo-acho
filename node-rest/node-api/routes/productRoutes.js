const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema')

router.post('/',
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct
);

router.get('/:id', 
    productController.getProductById
    );

router.get('/',joiSchemaValidation.validateQueryParamas(productSchema.getAllProductsSchema), productController.getAllProducts)


module.exports = router;