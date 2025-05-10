const router = require('express').Router();
const productControl = require('../Controller/productControl');
const auth = require('../Middleware/auth');
const authAdmin = require('../Middleware/authAdmin');

router.route('/products')
.get(productControl.getProducts)
.post(productControl.createProducts)

router.route('/products/:id')
.put(productControl.updateProducts)
.delete(productControl.deleteProducts)


module.exports = router;