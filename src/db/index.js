const knex = require('knex')({
    client: 'mysql',
    connection: {
        host            : 'host ip address',
        user            : 'userId',
        password        : 'password',
        database        : 'database',
    }
});

module.exports = knex;


// npm i knex mysql -g 