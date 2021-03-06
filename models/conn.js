//first require 'pg-promise'
//call it immediately, which gives us a configured database connector

const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY: ', e.query);
    }  
});
const options = {
    host: 'localhost',
    database: 'coffee-order-app'
};

// make a connection to the database specified by the options object
const db = pgp(options);
module.exports = db;