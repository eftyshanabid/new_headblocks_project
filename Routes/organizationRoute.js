const express = require('express');
const { createOrg, getallorg, deleteOrg } = require('../controller/organizationController');
const router = express.Router();

router.post('/create',createOrg);
router.get('/getOrg',getallorg);
router.delete('/deleteOrg',deleteOrg);

module.exports = router;