const route=require('express').Router()
const frontendController=require('../controllers/frontend_controller')

route.get('/',frontendController.home)
route.post('/create',frontendController.create)
route.get('/delete/:id',frontendController.delete)
route.get('/update/:id',frontendController.getUpdateForm)
route.post('/update/:id',frontendController.update)
route.get('/random-blog',frontendController.randomBlog)
module.exports=route
