const cors = require ('cors');
const express = require('express');
const bodyParser = require('body-parser')


const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./getApp.js")(app)
require("./postApp.js")(app)

app.get('/', (req, res)=>{
	res.status(200).send({"title":"home"});
});

app.listen(3000, (error) =>{
	console.log("Listening to port...")
});
