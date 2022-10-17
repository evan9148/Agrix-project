const db = require("../models");
const Farmer = db.farmer;

// Get Farmer Details
exports.farmer =(req,res) =>{
    const  farmerId= req.query.farmerId;
      var condition = farmerId ? { farmerId: { $regex: new RegExp(farmerId), $options: "i" } } : {};
      Farmer.find(condition)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving FarmerId."
          });
        });
}

// Add for farmer...!
exports.addFarmer =  (req, res) => {
    const farmer = new Farmer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        farmerId: req.body.farmerId,
        clusterCode:req.body.clusterCode,
        ownerType: req.body.ownerType,
        address: req.body.address,
        clusterId:req.body.clusterId,
        farmingSeason: req.body.farmingSeason,
        cropType: req.body.cropType,
        cropSubType: req.body.cropSubType,
        // plotArea: req.body.plotArea,
    });

    farmer
        .save(farmer)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the farmer"
            });
        });

}

// Get farmer by Id
exports.farmerById = (req, res) => {
  const id = req.params.id;
  Farmer.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Farmer with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Farmer with id=" + id });
    });
};



// update farmer by Id
exports.updateFarmerById = (req, res) =>{
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Farmer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Farmer with id=${id}. Maybe Farmer was not found!`
        });
      } else res.send({ message: "Farmer was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Farmer with id=" + id
      });
    });
}

//Get Api for farmers List By ClusterId

exports.farmersByClusterId = (req, res) => {
  Farmer.find({clusterId:req.params.clusterId})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Farmer with id " + clusterid });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Farmer with id=" + clusterid });
    });
};

// delete farmer by Id
exports.deleteFarmerById = (req, res) => {
  const id = req.params.id;
  Farmer.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Farmer with id=${id}. Maybe Farmer was not found!`
        });
      } else {
        res.send({
          message: "Farmer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Farmer with id=" + id
      });
    });
};





exports.farmerCluster =(req,res) =>{
  // const  clusterId= req.query.clusterId;
  //   var condition = clusterId ? { clusterId: { $regex: new RegExp(clusterId), $options: "i" } } : {};
    Farmer.find(
      {
        "$or":[
          {clusterId:{$regex:req.params.key}}
        ]
      }
    )
      .then(data => {
        const d=res.send(data);
        console.log(d);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ClusterId."
        });
      });
}