const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        title:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true
    }
)



// Compile the Category Model

const Category = mongoose.model("Category",categorySchema);

exports.module = Category;