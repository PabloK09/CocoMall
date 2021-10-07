const { Router } = require('express');
const router = Router();
const {
    getAllData,
    createProduct,
    bulkCreateProducts,
    findAllProductsOfStore,
    filterProductsByTypeAndName,
} = require('../controllers/Product.js');

//all routes start with /product

//GET's
router.get('/', getAllData);

router.get('/:id', findAllProductsOfStore);

router.post('/filter/:id', filterProductsByTypeAndName);//este es pra obtener datos filtrados en realidad no para crear

//POST's
router.post('/bulkCreate', bulkCreateProducts);

router.post('/create', createProduct);

module.exports = router;
