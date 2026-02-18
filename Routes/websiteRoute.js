const express = require('express');
const router = express.Router();

const {createWebsite,getallWebsites,getWebsiteById,deleteWebsite,updateWebsite,getwebsiteByName} = require('../controller/websiteController');

router.post('/create', createWebsite);
router.get('/getall',getallWebsites);
router.get('/getbyid/:id',getWebsiteById);
router.delete('/delete/:id',deleteWebsite);
router.put('/update/:id',updateWebsite);
router.get('/getbyname/:name',getwebsiteByName);



module.exports = router;