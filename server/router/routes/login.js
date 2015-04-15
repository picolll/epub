var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    res.contentType('application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    req.session.user = req.body.email.value;
    res.send(true);
});

module.exports = router;
