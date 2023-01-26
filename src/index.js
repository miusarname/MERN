const express = require("express");
const morgan = require("morgan");
const path = require("path");
const {mongoose} = require('./database');
const app = express();

//setting
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
const Routes = require("./routes/task.routes"); //Define a const Routes

app.use("/api/task", Routes);

//Static files
front= path.join(__dirname + '/public')
app.use(express.static(front)); 

//Server
app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});
