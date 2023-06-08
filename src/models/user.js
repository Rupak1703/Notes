const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({

    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }

} , {timestamps : true}); // this timestamps: true adds 2 fields in the table created at , updated at

module.exports = mongoose.model("User" , UserSchema);