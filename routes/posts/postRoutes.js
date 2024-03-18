const express = require("express");


const postRouter = express.Router();

postRouter.post("/",async(req,res)=>{
    try {
        res.json({
            status:"success",
            data:"post created"
        })        
    } catch (error) {
        res.json(error.message);
    }
})

// GET/api/v1/posts/:id
postRouter.get("/:id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"Post route"
        })
    } catch (error) {
        res.json(error.message)
    }
})

// GET/api/v1/posts/
postRouter.get("/",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"All Posts routes"
        })
    } catch (error) {
        res.json(error.message)
    }
})

// DELETE/api/v1/posts/:is
postRouter.delete("/:id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"delete post route"
        })
    } catch (error) {
        res.json(error.message)
    }
})

// PUT/api/v1/posts/:id
postRouter.put("/:id",async(req,res)=>{
    try {
        res.json({
            status:"Success",
            data:"update post route"
        })
    } catch (error) {
        res.json(error.message)
    }
})


module.exports= postRouter;