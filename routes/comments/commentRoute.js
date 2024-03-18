const express = require("express");

const commentRouter = express.Router();

commentRouter.post("/",async(req,res)=>{
    try {
        res.json({
            status:"success",
            data:"comments created"
        })
    } catch (error) {
        
    }
})

// GET/api/v1/comments/:id
commentRouter.get("/:id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"comment route"
        })
    } catch (error) {
        res.json(error.message)
    }
})


// DELETE/api/v1/comments/:is
commentRouter.delete(":id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"delete comment route"
        })
    } catch (error) {
        res.json(error.message)
    }
})

// PUT/api/v1/comments/:id
commentRouter.put("/:id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"update comment route"
        })
    } catch (error) {
        res.json(error.message)
    }
})




module.exports= commentRouter;