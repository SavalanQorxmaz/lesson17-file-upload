const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
// const { url } = require("inspector");
// const { urlencoded } = require("express");
const port = 7000


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))


const db = []

app.get("/", (req, res) => {

    res.send(
      db[0]
    )
  
})
app.post('/create-data', (req, res)=>{
res.send(req.body)
db.splice(0,db.length-1)
db.unshift(req.body)
 console.log(db)
  
  

 
})







app.listen(port)