const mongoose = require("mongoose");
var collegeschema = new mongoose.Schema({
    college_id : {
        type : Number,
        required : "Required"

    },
    college_name :{
        type : String
    },
    No_of_students : {
        type : Number
    },
    City : {
        type : String
    },
    Country : {
        type : String
    },
    Year_founded : {
        type : Date
    }
});
 mongoose.model("college", collegeschema)