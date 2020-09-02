const mongoose = require("mongoose")
let breedSchema = new mongoose.Schema({
    breedName: {
        type: String,
        required: true
        
    },
    goodWithKids:{
        type:Boolean
    } ,
    species: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Species"
    },
    animalClass: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "animalClass"
    },
    locationFound:{
        type: String


    }
})

module.exports = mongoose.model('Breed', breedSchema)