const express = require("express")

const categoryRouter = express.Router();

categoryRouter.post("/",async(req,res)=>{
    try {
        res.json({
            status:"success",
            data:"category created"
        })
    } catch (error) {
        
    }
})

// GET/api/v1/categories/:id
categoryRouter.get("/:id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"category route"
        })
    } catch (error) {
        res.json(error.message)
    }
})


// DELETE/api/v1/categories/:id
categoryRouter.delete("/:id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"delete category route"
        })
    } catch (error) {
        res.json(error.message)
    }
})

// PUT/api/v1/categories/:id
categoryRouter.put("/:id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"update category route"
        })
    } catch (error) {
        res.json(error.message)
    }
})      

module.exports=categoryRouter;