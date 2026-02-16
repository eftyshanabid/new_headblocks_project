const express = require('express');
const router = express.Router();

const {createWebsite,getallWebsites,getWebsiteById,deleteWebsite} = require('../controller/websiteController');

router.post('/create', createWebsite);
router.get('/getall',getallWebsites);
router.get('/getbyid/:id',getWebsiteById);
router.delete('/delete/:id',deleteWebsite);


module.exports = router;