const router = require('express').Router();
const categoryControl = require('../Controller/categoryControl');
const auth = require('../Middleware/auth')
const authAdmin = require('../Middleware/authAdmin')


router.route('/category')
.get(categoryControl.getCategories)
.post(auth, authAdmin, categoryControl.createCategory)

router.route('/category/:id')
.delete(auth, authAdmin, categoryControl.deleteCategory)
.put(auth, authAdmin, categoryControl.updateCategory)

module.exports = router;