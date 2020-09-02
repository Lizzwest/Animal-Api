const router = require("express").Router()
const db = require("../models")

//GET /Animals
router.get('/', (req, res)=>{
    db.Animal.find()
    .then(foundAnimals=>{
        // console.log('Animals:', Animals)
        res.send(foundAnimals)
    })
    .catch(err=>{
        console.log(err)
        // 503 Service Unavailable
        res.status(503).send({message: 'Database asleep?'})

    })

})

router.get('/:id', (req, res)=>{
    db.Animal.findById(req.params.id)
    .then(foundAnimal=>{
        if(foundBody){
            res.send(foundAnimal)
        }else{
            res.status(404).send({message: "resource not loaded"})
        }
    })
    res.send("im gonna need to see an ID please")
})
router.post('/', (req, res)=>{
    db.Animal.create(req.body)
    .then(createdAnimal=>{
        console.log(createdAnimal)
        res.status(201).send(createdAnimal)
    })
    .catch(err=>{
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(503).send({message:'Database or server error!'})
        }
    })
   
})

    // res.send(" Hey hey wait a minute mister POSTman")



router.put('/:id', (req, res)=>{
    db.Animal.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedAnimal=>{
        res.send(updatedAnimal)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
    // res.send("you put your mongoose in you take your mongoose out")
})

router.delete('/:id', (req, res)=>{
    db.Animal.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(204).send()
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
    // res.send("YOU CANT SIT WITH US")
})

router.delete('/', (req, res)=>{
    db.Animal.deleteMany()
    .then(()=>{
        res.send({message: 'We did it?'})
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
   
})
    // res.send("YOU CANT SIT WITH US")


module.exports = router