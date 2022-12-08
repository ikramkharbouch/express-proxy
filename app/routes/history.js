const controller = require('../controllers/history')
const router = require('express').Router();

// CRUD endpoint

router.post('/', controller.getHistory);

module.exports = router;