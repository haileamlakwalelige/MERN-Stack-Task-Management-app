const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
});

const TaskModel= mongoose.model("task",taskSchema);
module.exports = TaskModel;



