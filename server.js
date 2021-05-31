const express=require('express')
const app=express()
const port=5000

require('./config/db')// db connection

const expressLayouts = require('express-ejs-layouts')
app.set('view engine','ejs')
app.use(expressLayouts)

//body parsers
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',require('./routes/index'))// initiator to all routes

app.listen(port,()=>{
    console.log(`listening at http://localhost:5000`)
})