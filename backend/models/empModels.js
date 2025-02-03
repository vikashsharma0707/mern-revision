const mongoose = require("mongoose")

const EmpSchema = new mongoose.Schema({
    empno:{
        type:Number,
        require:true
    },
  
    empname:{
        type:String,
        require:true
    },

    empcity:{
        type:String,
        require:true
    },

    empsubject:{
        type:String,
        require:true
    },
})

 module.exports= mongoose.model("emp",EmpSchema)