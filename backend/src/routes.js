const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');
 
const OngController = require('./Controllers/OngController');
const IncidentsController = require('./Controllers/IncidentsController');
const ProfilleController = require('./Controllers/ProfilleController');
const SessionController = require('./Controllers/SessionController');
const routes = express.Router();
routes.post("/sessions", SessionController.logar);

routes.get("/profille", ProfilleController.listarEspecifico);

routes.get('/incidents',IncidentsController.listar);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete);

routes.get('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
    })
}), OngController.listar);
routes.post('/ongs', OngController.create);

module.exports=routes;