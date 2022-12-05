const controller = require('../controllers/micr')
const router = require('express').Router();

// CRUD endpoint

router.get('/', controller.sayHello);
router.post('/', controller.getMicrResult);

module.exports = router;