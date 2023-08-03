/* //////////////////////////////////////////////////////////////////////////////Requires ////////////////////////////////////////////////////////////////////////////////////////////////*/
const express = require("express")
const app = express()
const path = require("path")
const PORT = 3030

app.use(express.static("public"))
app.listen(PORT, () => console.log(`servidor corriendo en http://localhost:`+PORT))
/* ////////////////////////////////////////////////////////Direcciones //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views","home.html"))) 

app.get("/home",(req,res) => res.sendFile(path.join(__dirname,"views","home.html"))) 

app.get("/register",(req,res) => res.sendFile(path.join(__dirname,"views","register.html")))

app.get("/login",(req,res) => res.sendFile(path.join(__dirname,"views","login.html")))


