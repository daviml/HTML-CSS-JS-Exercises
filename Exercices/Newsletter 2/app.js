const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+"/singup.html")
})

app.post("/",function(req,res){

    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email

    const data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    const jasonData = JSON.stringify(data)

    const url = "https://us8.api.mailchimp.com/3.0/lists/5906b30f42"

    const options = {
        method: "POST",
        auth: "davimoraesladeira:427950dd785eb77cdf7989753138d13c-us8"

    }

    const request = https.request(url, options, function(response){

        if(response.statusCode === 200){
            res.sendFile(__dirname+"/sucess.html")
        }else{
            res.sendfile(__dirname+"/failure.html")
        }

        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jasonData)
    request.end()

})

app.post("/failure",function(req,res){
    res.redirect("/")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server runing on port 3000")
})

// API KEY
// 427950dd785eb77cdf7989753138d13c-us8
// list id
// 5906b30f42