const express = require("express")
const requestify = require('requestify');  
var port =  process.env.PORT || 5500;
const cors = require('cors')
const app = express();



app.use(cors())

var headers = {
    "accept-language": "en-US,en;q=0.9",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
}

app.get('/',(req,res)=>{
  res.send('hello from render')
})


app.listen(port,()=>{
    console.log(port)
})
