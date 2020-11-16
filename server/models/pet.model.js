const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"A dog must have a name."],
        minlength:[3,"Name must be at least 3 characters."],
    },
    type:{
        type: String,
        required:[true,"Type is required."],
        minlength:[3,"Name must be at least 3 characters."],
    },
    description:{
        type: String,
        required:[true,"Pet must have a description."],
        minlength: [3,"Description must be at least 3 characters."]
    },
    skillone:{
        type: String,
    },
    skilltwo:{
        type: String,
    },
    skillthree:{
        type: String,
    }
},{timestamps:true})

module.exports.Pet = mongoose.model("Pet",PetSchema)