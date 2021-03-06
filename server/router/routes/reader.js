var express = require('express');
var router = express.Router();
var reader = require('./functions/reader');

router.get('/:id', reader.get);

module.exports = router;
