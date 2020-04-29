var express = require('express')
var bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post('/',function(req,res){

    let n1 = Number(req.body.n1)
    let n2 = Number(req.body.n2)

    let result = n1/n2

    res.send('your bmi is: '+result)

})

app.listen(3000, function(){
    console.log('port:3000')
})