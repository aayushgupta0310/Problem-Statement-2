const express = require("express")
const app = express()
const router = require("./router")

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(express.static("public"))
app.set("views","views")
app.set("view engine","hbs")

app.use("/",router)

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(3000,() => {
    console.log("THe server is running on port 3000")
})