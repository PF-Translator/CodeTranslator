const { Pool } = require('pg');

const PG_URI = 'postgres://tgoqputw:j1lk2alsdoIhvO3lOcVSi1MI4d9L-rV0@kashin.db.elephantsql.com/tgoqputw';

const pool = New Pool({
    connectionString : PG_URI
});

module.exports = {
    query : (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};