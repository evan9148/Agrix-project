const { authJwt } = require("../middleware");

module.exports = app => {
    const implementype = require("../controller/implement-name-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin],implementype.getImplementName);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], implementype.addImplementName);
    router.put("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.updateImplementNameById);
    router.delete("/:id", [authJwt.verifyToken,authJwt.isAdmin],machine.deleteImplementNameById);

    app.use('/api/implementname', router);
};