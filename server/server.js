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

// app.get("/", (req, res) => {

//     res.send(
//       {data:db}
//     )
  
// })
app.post('/create-data', (req, res)=>{
res.send(req.body)
//  console.log(req.body)
  
  

 
})







app.listen(port)