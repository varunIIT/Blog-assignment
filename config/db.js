const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log('db connection successful')
})
.catch(()=>{
    console.log('db connection unsuccessful')
})