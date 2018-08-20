const express = require('express');
const app = express();
app.get('/api',function(req,res){
    console.log("Get request");
    res.send({name:'subahs'});
});
app.listen(process.env.port || 4000,function(){
    console.log("listingin the request");
});