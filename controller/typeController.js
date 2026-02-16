const Type = require("../model/Type");
const { get } = require("../Routes/websiteRoute");
async function createType(req, res) {
    try {
        // const { name, status} = req.body;
        const{name:name,status:status} = req.body;
        const type = await Type.create({ name, status });
        res.status(201).json(type);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to create type' });
    }
}

async function updateTable(req,res){
    try{
        const id = req.params.id;
        const {name:name,status:status} = req.body;

        const type = await Type.findByPk(id);
        if(!type){
            return res.status(404).json({msg:"type not found"})
        }
        type.name = name;
        type.status = status;
        await type.save();
        res.status(200).json(type);
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Failed to update type' });   
    }
}

async function deleteType(req,res) {
    const id = req.params.id;
    try{
        const type = await Type.findByPk(id);
        if(!type){
            return res.status(404).json({msg:"type not found"})
        }
        await type.destroy();
        res.status(200).json({msg:"type deleted successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'Failed to delete type' });
}
}

async function getAllTypes(req,res){
    try{
        const types = await Type.findAll();
        res.status(200).json(types);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve types' });
    }
}

async function getTypeById(req,res){
    const id = req.params.id;
    try{
        const type = await Type.findByPk(id);
        if(!type){
            return res.status(404).json({msg:"type not found"})
        }
        res.status(200).json(type);
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'Failed to retrieve type'
        })
    }
}

async function typeList(req,res)
{
    try{
        const types = await Type.findAll({
            attributes:['id','name']
        });
        res.status(200).json(types);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve type list' });
    }
}

module.exports = {createType,updateTable,deleteType,getAllTypes,getTypeById,typeList};