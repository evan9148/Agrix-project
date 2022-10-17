const db=require("../models");
const Driver = db.driver;


// Get Driver Details
exports.getDriver =(req,res) =>{
    const driverId = req.query.driverId;
    Driver.find(driverId)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Driver with id " + driverId });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Driver with id=" + driverId });
      });
  }

// Add Driver
exports.addDriver = (req,res) =>{
    const driver=new Driver({
        driverId:req.body.driverId,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        contactDetails:req.body.contactDetails,
        village:req.body.village,
        district:req.body.district,
        state:req.body.state
    });

    driver
        .save(driver)
        .then(data =>{
            res.send(data);
            console.log(data)
        })
        .catch(error =>{
            res.status(500).send({
                message:
                    error.message || "some error occurred while creating the driver"
            });
        });
}

// Get driver by Id
exports.driverById = (req, res) => {
  const id = req.params.id;
  Driver.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Driver with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Driver with id=" + id 
      });
    });
};

// Edit/update  Driver Id
exports.updateDriverById = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Driver.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update driver with id=${id}. Maybe driver was not found!`
        });
      } else res.send({ message: "driver was updated successfully."});
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating driver with id=" + id
      });
    });
};


// delete api for Drivers...!
exports.deleteDriverById = (req, res) => {
  const id = req.params.id;
  Driver.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`
        });
      } else {
        res.send({
          message: "Driver was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Driver with id =" + id
      });
    });
};