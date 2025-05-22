const express = require('express');
const router = express.Router();
const { consultar } = require('../controllers/queryController');

router.post('/', consultar);

module.exports = router;
