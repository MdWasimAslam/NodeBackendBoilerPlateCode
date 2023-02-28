const cors = require ('cors');
const express = require('express');
const app = express();



module.exports =function (app) {
    app.get('/getuser', (req, res)=>{
        
        res.status(200).send({"title":"user"});
    });
}