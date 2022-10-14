const db=require("../models");
const State=db.state;



// All state
exports.getState = (req,res) =>{
    // const state = req.query.state;
    State.find({})
        .then(data =>{
            if(!data)
                res.status(404).send({messsage: "Not found State with id "});
            else res.send(data);
        })
        .catch(error =>{
            res
                .status(500)
                .send({message: "Error retrieving State with id=" + state})
        });
}

// Add state
exports.addState = (req,res) =>{
    const id=req.body._id;
    const state=new State({
        state:req.body.state,
        id:req.body.id
    });

    state
        .save(state)
        .then(data=>{
            res.send(data);
        })
        .catch(error =>{
            res.status(500).send({
                messsage:
                    error.messsage || "some error occurred while creating the state"
            });
        });
}