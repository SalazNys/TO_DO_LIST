const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser')
let elements = []

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get("/", function(req, res, next){
  res.render("index", {elements:elements})
})

app.post("/", function(req,res,next){
	elements.push(req.body.todo)
	console.log(elements)
	res.redirect("/")
})

app.listen(3000, function(){
  console.log("App running on port 3000")
})
