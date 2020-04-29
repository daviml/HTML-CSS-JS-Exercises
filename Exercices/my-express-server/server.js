var express = require('express')

var app = express()

app.get('/', function(req, res){
    res.send('hello world!')
})

app.get('/contact', function(req,res){
    res.send('contact me as ok')
})

app.listen(3000, function(){
    console.log('exemple app listening on port 3000!')
})