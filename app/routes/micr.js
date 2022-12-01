const controller = require('../controllers/micr')
const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

// CRUD endpoint

router.post('/', upload.single('file'), controller.getMicrResult)

module.exports = router;