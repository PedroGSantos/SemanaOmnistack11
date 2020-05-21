const connection = require('../database/connection');
module.exports = {
    async logar(request,response){
        const {id} = request.body;
        const ong = await connection('ongs').where('id', id).select('name').first();
        if(!ong){
            return response.status(400).json({error: 'O id da ong não foi encontrado'});
        }

        return response.json(ong);
    }
}