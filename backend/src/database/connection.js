const knx = require('knex');
const configuration = require('../../knexfile');
const connection = knx(configuration.development);
module.exports=connection;