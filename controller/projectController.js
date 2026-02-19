const Project = require("../model/Project");

async function createProject(req, res) {
    try {
        const { name, status, budget, tier, org_id } = req.body;
        const newProj = await Project.create({name, status, budget, tier, org_id});
        res.status(201).json({
            msg: "msg created successfully",
            data: newProj
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "error creating project"
        })
    }
}

async function getProjects(req,res) {
    try{
        const projects = await Project.findAll();
        res.status(201).json({
            msg : "project created successfully",
            data : projects
        })
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({
            msg : "error fetching projects",
        })
    }  
}

async function deleteProject(req,res) {
    try{
        const id = req.params.id;
        const project = await Project.findByPk(id);
        if(!project)
        {
            res.status(404).json({
                msg : "project did not found"
            })
        }
        await project.destroy();
        res.status(200).json({
            msg : `project with ${id} successfully deleted`
        })
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({
            msg : "error deleting project"
        })
    }
}


module.exports = {createProject,getProjects,deleteProject}