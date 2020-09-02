let cors = require('cors')
let express = require('express')

// Create instance for express app
let app = express()

// Set up middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use(cors())

// Include the controllers
app.use('/animals', require('./controllers/animals'))

// Catch all route (404: Not found)
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' })
})


app.get("/", (req, res)=>{
    res.send("I'm home")
})

app.listen(8000, ()=>{
    console.log("Phone Home")
})


module.exports