const Organization = require('../model/Organization');

async function createOrg(req,res) {
    try{
    const {name,website_id,contact,address} = req.body;

    const newOrg = await Organization.create(name,website_id,contact,address);
    res.status(201).json({
        msg: "Organization has been created successfully",
        data: newOrg
    })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            msg: "error creating Organization",
        })  
    }   
}

async function getallorg(req,res) {
    try{
        const org = await Organization.findAll();
        res.status(200).json({
            data:org
        })
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({
            msg: "error fetching Organizations"
        })
    }
}

async function deleteOrg(req,res) {
    try{
        const id = req.params.id;
        const org = await Organization.findByPk(id);
        if(!org){
            res.status(404).json({
                msg : "Can not find Organization",
                err: `Organization with ${id} can not be found`
            })
        }
        await org.destroy();
        res.status(200).json({
            msg : "Organization deleted successfully"
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({
            msg: "Can not delete Organization"
        })
    }
}

module.exports = {createOrg,getallorg,deleteOrg}