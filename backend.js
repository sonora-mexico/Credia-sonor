

// backend.js ejemplo institucional

const express = require("express");

const app = express();

app.get("/api/balance", (req,res)=>{

res.json({balance:50000});

});

app.listen(3000);

