const express = require('express')
const https = require('https')

const app = express()

app.get('/', function(req,res){

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Uberlandia&units=metric&appid=3c7d60a6066e2361844a5442e0cab21f'
    
    https.get(url, function(response){
        console.log(response.statusCode)

    response.on('data',function(data){
        const weatherData = JSON.parse(data)
        console.log(weatherData)
    })

    })

    res.send('server is up and runing.')
})





app.listen(3000,function(){
    console.log('server is runing on port 3000')
})