import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser'

import PersonController from './controllers/PersonController';

import { serverPort, db } from '../etc/config.json';

const Person = new PersonController();

const app = express();

mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/persons', Person.create);
//app.get('/persons', Person.read);
//app.delete('/persons/:', Person.delete);
//app.put('/persons/:id', Person.update);

app.listen(serverPort, () => {
    console.log('Server started');
});




