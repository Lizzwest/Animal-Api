const mongoose = require("mongoose")

let speciesSchema = new mongoose.Schema({
    speciesName:{
        type: String,
        required: true
    },
    isDomesticated:{
        type: Boolean
    
}
})

module.exports = mongoose.model('Species', speciesSchema)