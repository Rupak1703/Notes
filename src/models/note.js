const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }

} , {timestamps : true}); // this timestamps: true adds 2 fields in the table created at , modified at

module.exports = mongoose.model("Note" , NoteSchema);