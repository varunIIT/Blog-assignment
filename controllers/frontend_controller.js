const fetch = require('node-fetch')

module.exports.home=(req,res)=>{
    fetch('http://localhost:5000/blog/read-all', {
        method: 'get',
        //body:    JSON.stringify(body),
        //headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(blogs=>{
        //console.log(blogs)
        return res.render('home',{blogs})
     })
}
module.exports.create=(req,res)=>{
    fetch('http://localhost:5000/blog/create', {
        method: 'post',
        body:    JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(blog=>{
        //console.log(blogs)
        return res.redirect('/')
     })
}
module.exports.delete=(req,res)=>{
    fetch(`http://localhost:5000/blog/delete/${req.params.id}`, {
        method: 'delete',
        // body:    JSON.stringify(req.body),
        // headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(blog=>{
        //console.log(blogs)
        return res.redirect('/')
     })
}
module.exports.getUpdateForm=(req,res)=>{
   res.render('update',{id:req.params.id})
}
module.exports.update=(req,res)=>{
    fetch(`http://localhost:5000/blog/update/${req.params.id}`, {
        method: 'put',
         body:    JSON.stringify(req.body),
         headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(blog=>{
        //console.log(blogs)
        return res.redirect('/')
     })
}
module.exports.randomBlog=(req,res)=>{
    fetch(`http://localhost:5000/blog/read-random`, {
        method: 'get',
        // body:    JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(blog=>{
        //console.log(blogs)
        return res.render('random-blog',{blog})
     })
}