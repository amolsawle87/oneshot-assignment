const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");

const collegecontroller = require("./controllers/college")

application.use(bodyparser.urlencoded({
    extended : true
}));

application.set('views', path.join(__dirname, "/views/"))

application.engine("hbs", expressHandlerbars ({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

application.set("views engine", "hbs")


application.get("/", (req, res)=>{
    res.render("index", {})
});

application.use("/college", collegecontroller)
application.listen("3000", ()=>{
    console.log("server started");
});
