const express = require("express")
const fetch = require('node-fetch')
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
 fetch('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY').then((resp) =>res.json()).then((resf)=>res.send(resf))
})


app.listen(port,()=>{
    console.log(port)
})
