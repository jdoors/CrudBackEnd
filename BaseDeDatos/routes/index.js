var express = require('express');
var router = express.Router();
const {index} = require("../controller/controller.js");

/* GET home page. */
router.get('/', index);

module.exports = router;

