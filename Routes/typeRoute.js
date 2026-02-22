const express = require('express');
const router = express.Router();
const {createType,updateTable,deleteType,getAllTypes,getTypeById,typeList} = require('../controller/typeController');


/**
 * @swagger
 * /type/create:
 *   post:
 *     summary: Create a new type
 *     tags:
 *       - Type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                type: string
 *               status:
 *                type: string        
 *     responses:
 *       201:
 *         description: Type created successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: youtube
 *               status: lorem ipsum
 *               createdAt: 2026-02-18 15:38:34.525+06
 *               updatedAt: 2026-02-18 15:38:34.525+06
 *       404:
 *         description: Type not found
 */
router.post('/create', createType);
/**
 * @swagger
 * /type/update/{id}:
 *   put:
 *     summary: Update a type by id
 *     tags:
 *       - Type
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                type: string
 *               status:
 *                type: string        
 *     responses:
 *       201:
 *         description: Type created successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: youtube
 *               status: lorem ipsum
 *               createdAt: 2026-02-18 15:38:34.525+06
 *               updatedAt: 2026-02-18 15:38:34.525+06
 *       404:
 *         description: Type not found
 */
router.put('/update/:id',updateTable);
/**
 * @swagger
 * /type/delete/{id}:
 *   delete:
 *     summary: delete a record
 *     tags:
 *       - Type
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Camera deleted successfully
 */



router.delete('/delete/:id',deleteType);
/**
 * @swagger
 * /type/getall:
 *  get:
 *    summary: get typelist
 *    tags:
 *      - Type
 *    responses:
 *     200:
 *      description: List of types
 *      content:
 *        application/json:
 *          example:
 *            - id: 3
 *              name: Electronics
 *              status: Active
 *              createdAt: "2026-02-21T18:58:11.208Z"
 *              updatedAt: "2026-02-21T18:58:11.208Z"
 *            - id: 4
 *              name: Electronics
 *              status: Active
 *              createdAt: "2026-02-21T19:02:12.865Z"
 *              updatedAt: "2026-02-21T19:02:12.865Z"
 *            - id: 1
 *              name: Facebook
 *              status: Running
 *              createdAt: "2026-02-18T09:38:34.525Z"
 *              updatedAt: "2026-02-21T23:10:53.645Z"
 * 
 *              
 *    
 */


router.get('/getall',getAllTypes);
router.get('/getbyid/:id',getTypeById);
router.get('/typelist',typeList);

module.exports = router;