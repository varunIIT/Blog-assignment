const route=require('express').Router()

route.use('/blog',require('./blog'))
route.use('/',require('./frontend'))
module.exports=route