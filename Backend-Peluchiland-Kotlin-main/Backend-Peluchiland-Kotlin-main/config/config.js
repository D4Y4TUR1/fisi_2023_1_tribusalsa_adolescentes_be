const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {} //devuelve una variable y retorna una funcion
}

const pgp = require('pg-promise')(options); 
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': '127.0.0.1',
    'port': 5432,
    'database': 'peluchiland_db',
    'user': 'postgres',
    'password': 'S@Terceros3'
};

const db = pgp(databaseConfig);

module.exports = db;