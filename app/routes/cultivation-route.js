const { authJwt } = require('../middleware');

module.exports = app =>{
    const cultivation = require('../controller/cultivation.controller')
    var router = require('express').Router();

    router.post('/',[authJwt.verifyToken,authJwt.isAdmin],cultivation.addCultivation);
    router.get('/',[authJwt.verifyToken,authJwt.isAdmin],cultivation.getCultivation);
    router.get('/:plot',[authJwt.verifyToken,authJwt.isAdmin],cultivation.getCultivationByplot);
    // router.put("/:id",[authJwt.verifyToken,authJwt.isAdmin], croptype.updateCropTypebyId);
    // router.delete("/:id",[authJwt.verifyToken,authJwt.isAdmin],croptype.deleteCropTypebyId);


    app.use('/api/cultivation',router);
}