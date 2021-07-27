const express = require('express');
const router = express.Router();
const {getStores, addStore} = require('../controllers/store')

 
router.route('/api/v1/stores').get(getStores).post(addStore);


 




module.exports = router;


