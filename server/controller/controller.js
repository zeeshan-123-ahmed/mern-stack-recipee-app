var RecipeeDB = require('../model/model');

// create and save new recipe
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new recipee
    const recipe = new Userdb({
        title : req.body.title,
        description : req.body.description,
        ingredients: req.body.ingredients,
        instructions : req.body.instructions,
        image: req.body.image
    })

    // save recipe in the database
    recipe
        .save(recipe)
        .then(data => {
            //res.send(data)
            res.redirect('/add-recipee');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all recipees/ retrive and return a single recipee
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        RecipeeDB.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found recipee with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving recipee with id " + id})
            })

    }else{
        RecipeeDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving recipee information" })
            })
    }

    
}

// Update a new identified recipee by recipee id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    RecipeeDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update recipee with ${id}. Maybe recipee not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update recipee information"})
        })
}

// Delete a recipee with specified recipee id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    RecipeeDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "recipee was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete recipee with id=" + id
            });
        });
}