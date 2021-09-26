const express = require("express");
var router = express.Router();


const {getSoil} = require('../controller/soil')

router.get('/soil',getSoil)


module.exports = router;