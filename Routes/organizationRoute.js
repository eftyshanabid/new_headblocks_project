const express = require('express');
const router = express.Router();
const { createOrg, getallorg, deleteOrg } = require('../controller/organizationController');

router.post('/create',createOrg);
router.get('/getOrg',getallorg);
router.delete('/deleteOrg',deleteOrg);

module.exports = router;