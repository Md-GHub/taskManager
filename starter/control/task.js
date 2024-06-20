const task = require('../model/schema');

const getAllTasks = async (req,res)=>{
    try{
        const value = await task.find({});
        res.status(200).json({value})
    }catch(e){
        console.log("error in reading data");
        return res.status(400).json({
            status:"unsuccess"
        })
    }
}
const getTaskById = async (req,res) => {
    const {id:taskID} = req.params;
    const value = await task.find({_id:taskID});
    if(!value){
        //logic needed
    }
    res.status(200).json({value});
}
const createTask  = async (req,res)=>{
    const value = await task.create(req.body);
    req.status(201).json({value});
}
const deleteById = async (req,res)=>{
    const {id:taskID} = req.params;
    const value = task.findOneAndDelete({_id:taskID});
    if(!value){

    }
    res.status(200).json({value});
}
const updateById = async (req,res)=>{
    const {id:taskID} = req.params;
    const value = findOneAndUpdate({_id:taskID},req.body)
    if(!value){
        //code
    }
    res.status(200).json({value});
}

module.exports = {getAllTasks,getTaskById,createTask,deleteById,updateById};