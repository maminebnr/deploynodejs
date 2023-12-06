const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const port = 3000


app.get('/', (req, res) => {
    res.send('hello world ')
})

app.listen(port,()=>{
    console.log('app listening on port ' + port);
   
})

