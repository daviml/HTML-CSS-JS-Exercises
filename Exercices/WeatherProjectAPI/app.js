const express = require('express')
const https = require('https')
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req,res){

    res.sendFile(__dirname + "/index.html")

})

app.post("/",function(req,res){

    const city = req.body.CityName
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=3c7d60a6066e2361844a5442e0cab21f"

    https.get(url, function(response){
    console.log(response.statusCode)

    response.on('data',function(data){
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imgURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        
        res.write("<p>Temp: "+temp+"<p>")
        res.write('<p>Weather is: '+weatherDescription+"<p>")
        res.write("<img src="+imgURL+">")

        res.send()
    })
})
    
})





app.listen(3000,function(){
    console.log('server is runing on port 3000')
})