const express = require('express')
const app = express()
const dotenv = require("dotenv");
const Port = process.env.PORT || 4000;


dotenv.config();
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(Port, () => {
    console.log(`Example app listening on port ${Port}`)
})