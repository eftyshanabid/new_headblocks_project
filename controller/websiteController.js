const { ForeignKeyConstraintError } = require('sequelize');
const Website = require('../model/Website');


async function createWebsite(req, res) {
    try {
        // const {name,url,type_id,status,is_active} = req.body;
        const my_name = req.body.name;
        const url = req.body.url;
        const type_id = req.body.type_no;
        const status = req.body.status;
        const is_active = req.body.is_active;

        const website = await Website.create({name:my_name,url,type_id,status,is_active});
        res.status(201).json(website);
    } catch (error) {
        if(error instanceof ForeignKeyConstraintError){
            res.status(404).json({
                msg:"typeno does not exist"
            })
        }
        res.status(500).json({ error: error });
  
  }
}


async function getallWebsites(req,res){
    try{
        const websites = await Website.findAll();
        res.status(200).json(websites);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve websites' });
    }
}


async function getWebsiteById(req,res){
    try{
        const id = req.params.id;
        const website = await Website.findByPk(id);
        if(!website){
            return res.status(404).json({msg:"website not found"})
        }
        res.status(200).json(website);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve website'});
    }
}

async function deleteWebsite(req,res) {
    try{
        const id = req.params.id;
        const website = await Website.findByPk(id);
        if(!website){
            return res.status(404).json({msg:"website not found"})
        }
        await website.destroy();
        res.status(200).json({msg:"website deleted successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'Failed to delete website' });
}
}

async function updateWebsite(req,res){
    try{
        const id = req.params.id;
        const {name:name,url:url,status:status,is_active:is_active} = req.body;
        
        const website = await Website.findByPk(id);
        if(!website){
            return res.status(404).json({msg:"website not found"})
        }
        website.name = name;
        website.url = url;
        website.status = status;
        website.is_active = is_active;
        await website.save();
        res.status(200).json(website);
    }catch(error){
        if(error instanceof ForeignKeyConstraintError){
            res.status(404).json({
                msg:"typeno does not exist"
            })
        }
        console.log(error);
        res.status(500).json({ error: error });
    }
}

async function getwebsiteByName(req,res){
    try{
        const name = req.params.name;
        const website = await Website.findOne({where:{name:name}});
        if(!website){
            return res.status(404).json({msg:"website not found"})
        }
        res.status(200).json(website);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve website' });
    }
}


module.exports = {createWebsite,getallWebsites,getWebsiteById,deleteWebsite,updateWebsite,getwebsiteByName};