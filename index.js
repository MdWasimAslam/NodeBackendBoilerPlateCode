// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("OK - Node app is running"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => console.log("Listening on", PORT));
