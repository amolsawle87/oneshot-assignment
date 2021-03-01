const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CollegeModel = mongoose.model("college");

router.get("/list", (req, res)=> {
    CollegeModel.find((err,docs)=> {
        if(!err)
            {
            console.log(docs);
            res.render("list" , {data : docs})
            }
        else
            {
            res.send("Error")
            }
    });
});

module.exports = router;