const controller = require('../controllers/checkData');
const router = require('express').Router();

router.get('/', controller.checkAllData);

module.exports = router;