const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/animaldata', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

//shortcut to mongoose connection
const db =mongoose.connection

////set up event listener to fire once connection opens

db.once('open', ()=>{
    console.log(`connected to mongodb at ${db.host}: ${db.port}`)
})
db.on('error', (err)=>{
    console.log(`Database error:\n${err}`)
})

//Export all the things
module.exports.Animal= require('./animal')