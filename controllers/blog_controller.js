const Blog=require('../models/blog')

module.exports.create=async (req,res)=>{
    try{
        const blog=await Blog.create(req.body)//creating new blog
        res.status(201).json(blog)
    }
    catch(err){
        console.log(err)
    }
}
module.exports.readAll=async (req,res)=>{
    try{
        const blogs=await Blog.find({})//find all blogs as geting an array of blogs
        res.status(200).json(blogs)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.readById=async (req,res)=>{
    try{
        const blog=await Blog.findById(req.params.id)//geting a blog by it's Id
        res.status(200).json(blog)
    }
    catch(err){
        console.log(err)
    }
}
module.exports.getRandom=async (req,res)=>{//geting a random blog
    try{
        const count=await Blog.count()//counting total no. of blogs in Blog collection
        const randomNumber=Math.random()*count // random no. between 0 to count -1
        const randomBlog=await Blog.findOne().skip(randomNumber)// geting one random blog
        res.status(200).json(randomBlog)
    }
    catch(err){
        console.log(err)
    }
}
module.exports.delete=async(req,res)=>{
    try{
        const blog=await Blog.deleteOne({_id:req.params.id})//deleting a single blog by it's Id
        res.status(200).json(blog)
    }
    catch(err){
        console.log(err)
    }
}
module.exports.update=async (req,res)=>{
    try{
        const beforeUpdateBlog=await Blog.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json(beforeUpdateBlog)
    }
    catch(err){
        console.log(err)
    }
}