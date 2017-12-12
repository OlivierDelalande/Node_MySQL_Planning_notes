'use strict';

const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const handler = require('handler');
const db = require('./models/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/note/create', function (req, res) {

    handler.create(req.body.titre, req.body.note, req.body.echeance, db.connection).then(() => {
    }).catch((error) => {
        console.warn('error:  ', error);
    });
    res.status(200).send('OK');
});

app.get('/note/:id', function (req, res) {

    handler.get(req.body).then(() => {
    }).catch((error) => {
        console.warn('error:  ', error);
    });
    res.status(200).send('OK');
});

app.delete('/note/delete', function (req, res) {

    handler.delete(req.body.id).then(() => {
    }).catch((error) => {
        console.warn('error:  ', error);
    });
    res.status(200).send('OK');
});


app.update('/note/update', function (req, res) {

    handler.update(req.body.id).then(() => {
    }).catch((error) => {
        console.warn('error:  ', error);
    });
    res.status(200).send('OK');
});

app.patch('/note/patch', function (req, res) {

    handler.patch(req.body.id).then(() => {
    }).catch((error) => {
        console.warn('error:  ', error);
    });
    res.status(200).send('OK');
});


app.listen('3001', () => {
    console.log('listening on port 3001');
});

module.exports = app;

