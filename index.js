const express = require("express")
const requestify = require('requestify');  
var port =  process.env.PORT || 5500;
const cors = require('cors')
const app = express();
const router = express.Router();


app.use(cors())

var headers = {
    "accept-language": "en-US,en;q=0.9",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
}

router.use((req,res,next)=>{
    requestify.request('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY', {
    method: 'GET',
    headers:headers,
    dataType: 'json'        
}).then(function(response){
    return res.send(response.getBody());
})
    return res
})
app.use('/',router)

app.listen(port,()=>{
    console.log(port)
})
