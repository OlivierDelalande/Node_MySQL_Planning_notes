'use strict';
class db {
    constructor() {
        const mysql = require('mysql');
        const
            connection = mysql.createConnection({
                host: 'localhost:8888',
                user: 'me',
                password: 'secret',
                database: 'notes_collabs'
            });
        connection.connect();
    }
}

module.exports = new db();