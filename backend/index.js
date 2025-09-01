const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")


require("dotenv").config()
const app = express()


const PORT = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json());

console.log(process.env.DB_URL)
let users=[]
 app.post("/signin",function(req,res){
   const { username, password, confirmPassword } = req.body;
 
  users.push({ username, password });
  console.log("Users:", users);
  res.send("Signup successful");
})

app.get("/", (req, res) => {
  const { username, password } = req.query;

  const user = users.find(
    (u) => u.username === username && u.password == password
  );

  if (user) {
    res.send(true);
  } else {
    res.send(false);
  }
})






app.listen(PORT,function(){
    console.log(`Server started on port ${PORT}...`);
})