const { Pool } = require('pg');

//Pink Fairy Armadillo Database URI
const PG_URI = 'postgres://tgoqputw:j1lk2alsdoIhvO3lOcVSi1MI4d9L-rV0@kashin.db.elephantsql.com/tgoqputw';

//setup queries to database
const pool = new Pool({
    connectionString : PG_URI
});

module.exports = {
    query : (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};