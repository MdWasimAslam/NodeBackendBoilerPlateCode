const cors = require ('cors');
const express = require('express');
const app = express();



module.exports =function (app) {
    app.post('/postuser', (req, res) => {
        console.log(req.body)
        res.send({"action":"user added"})
      })
}