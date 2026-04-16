const express = require('express')
const router = express.Router();

const {getAllProducts, getProductById} = require ('../controllers/productController');

router.route('/').get(getAllProducts)
router.route('./:id').get(getProductById) // we created 2 apis

module.exports = router;