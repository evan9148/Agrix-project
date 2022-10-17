const db = require("../models");
const District = db.district;

// // post api for district...
// exports.addDistrict = (req,res) => {
//     const district = new District({
//         stateId: req.body.stateId,
//         state: req.body.state,
//         district: req.body.district
//     })

//     district
//         .save()
//         .then((data) => {
//             res.send(data)
//         })
//         .catch((error) => {
//             res.status(404).json({
//                 error: "might missed while posting your data",error
//             })
//         })
// }


// // get api for state...
// exports.getDistrict = (req,res) => {
//     District.find({})
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found District"});
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving District" + err});
//     });
// }


// // get api for district according to given state...
// exports.getDistrictByState = (req,res) => {
//     const state = req.params.state;
//     District.findOne({state})
//       .then(data => {
//         if (!data)
//           res.status(404).send({ message: "Not found state by district" , state });
//         else res.send(data);
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .send({ message: "Error retrieving district" + err });
//       });
// }







//komal
// post api for district...
exports.addDistrict = (req,res) => {
  const district = new District({
      district: req.body.district,
      districtId: req.body.districtId,
      stateId: req.body.stateId,
  })

  district
      .save()
      .then((data) => {
          res.send(data)
      })
      .catch((error) => {
          res.status(404).json({
              error: "might missed while posting your data",error
          })
      })
}


// get api for state...
exports.getDistrict = (req,res) => {
  District.find({})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found District"});
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving District" + err});
    });
}


// get api for district according to given state...
exports.getDistrictByState = (req,res) => {
  // const state = req.params.stateId;
  District.find({stateId:req.params.stateId})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found state by district" , state });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving district" + err });
    });
}