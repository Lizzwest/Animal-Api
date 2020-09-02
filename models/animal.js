const mongoose =require('mongoose')
//animalClass
const animalClassSchema = new mongoose.Schema({
    className:{
        type: String,
        required: true
    },
    phylum: {
        type: String
    }
})
module.exports = mongoose.model('animalClass', animalClassSchema)