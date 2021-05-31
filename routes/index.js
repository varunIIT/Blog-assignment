const route=require('express').Router()

route.use('/blog',require('./blog'))
module.exports=route