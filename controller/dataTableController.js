const DataTable = require("../model/DataTable");

async function createDataTable(req,res) {
try{
    const {project_id,website_id,tier} = req.body
    const NewDataTable = await DataTable.create({project_id,website_id,tier});
    res.status(201).json({
        msg : "dataTable created successfully",
        data:NewDataTable
    })
}
catch(err){
    console.log("error creating table",err)
    res.status(500).json({
        msg : "error creating dataTable"
    })
}
}

module.exports = {createDataTable}