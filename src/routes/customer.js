const express = require('express')
const pool = require('mysql')
const router= express.Router();
const customerControler =  require('../controller/customerControler')
router.get('/list', customerControler.list)
router.post('/create',customerControler.save)

module.exports = router
