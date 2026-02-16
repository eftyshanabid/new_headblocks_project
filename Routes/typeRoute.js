const express = require('express');
const router = express.Router();
const {createType,updateTable,deleteType,getAllTypes,getTypeById,typeList} = require('../controller/typeController');


router.post('/create', createType);
router.put('/update/:id',updateTable);
router.delete('/delete/:id',deleteType);
router.get('/getall',getAllTypes);
router.get('/getbyid/:id',getTypeById);
router.get('/typelist',typeList);

module.exports = router;