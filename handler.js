'use strict';

class Notes {
    constructor() {
    }

    create(titre, note, echeance, db) {
        connection.query('INSERT INTO note (titre, note, echeance) VALUES (titre, note, echeance);', function (error, results) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        });

        connection.end();

    }

    get() {

    }

    update() {

    }

    patch() {

    }

    delete() {

    }
}

module.exports = new Notes();