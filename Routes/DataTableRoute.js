const express = require('express');
const { createDataTable } = require('../controller/dataTableController');
const router = express.Router();


router.post('/create',createDataTable)

module.exports = router;