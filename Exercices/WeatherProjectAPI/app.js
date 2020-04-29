const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.send('server is up and runing.')
})





app.listen(3000,function(){
    console.log('server is runing on port 3000')
})