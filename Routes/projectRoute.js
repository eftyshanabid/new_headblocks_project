const express = require('express');
const { deleteOrg } = require('../controller/organizationController');
const { createProject, getProjects } = require('../controller/projectController');
const router = express.Router();

router.post('/create',createProject);
router.get('/getprojects',getProjects);
router.delete('/delete',deleteOrg)


module.exports = router;