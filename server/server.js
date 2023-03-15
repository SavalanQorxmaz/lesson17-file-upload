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


app.get("/get-avatar", (req, res) => {

    res.send(
      db[0]
    )
  
})
app.post('/post-avatar', (req, res)=>{
res.send(req.body)
db.splice(0,db.length-1)
db.unshift(req.body)
  
  

 
})


app.get("/get-products", (req,res)=>{
  fetch('https://fakestoreapi.com/products')
            .then(r=>r.json())
           
            .then(r=>res.send(r))
})







app.listen(port)