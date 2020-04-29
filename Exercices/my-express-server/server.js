var express = require('express')

var app = express()

app.get('/', function(req, res){
    res.send('hello world!')
})

app.get('/contact', function(req,res){
    res.send('contact me as ok')
})

app.get('/about',function(req,res){
    res.send('<h1>olá, meu nome é davi</h1>')
})

app.listen(3000, function(){
    console.log('exemple app listening on port 3000!')
})