const route=require('express').Router()
const blogController=require('../controllers/blog_controller')

route.post('/create',blogController.create)//Create new posts
route.get('/read-all',blogController.readAll)//Read all posts 
route.get('/read/:id',blogController.readById)//call a specific post by its ID
route.get('/read-random',blogController.getRandom)//get a random post
route.delete('/delete/:id',blogController.delete)//Delete single post
route.put('/update/:id',blogController.update)//update posts

module.exports=route