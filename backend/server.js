const express = require('express')
const app = express();
const dotenv = require('dotenv')
var route1 = require('./routes/newroute')
dotenv.config();

let PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server started on port ${PORT}`))

app.use('/',route1)