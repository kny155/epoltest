import mongoose from 'mongoose';
import PersonModel from "../models/Person";

class PersonController {

    create = (req, res) => {
        const data = req.body;

        const person = new PersonModel({
            _id: mongoose.Types.ObjectId(data.id),
            age: data.age,
            name: data.name,
            gender: data.gender,
            company: data.company,
            email: data.email,
            phone: data.phone,
            address: data.address
        });

        person.save().then(() => {
            res.send({ statue: 'ok' });
        });

    };
    /*
    read = (req, res) => {

        PersonModel.find().then((err, persons) => {
            if(err) {
                res.send(err);
            }
            res.json(persons);
        });
    };


    update = (req, res) => {
        PersonModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
            if (err) {
                res.send(err);
            }
            res.json({ status: 'update' });
        })
    };

    delete = (req, res) => {
        PersonModel.remove({
            _id: req.params.id
        }).then(person => {
            if (person) {
                res.json({ status: 'deleted' });
            } else {
                res.json({ status: 'error' });
            }
        })
    };
    */
}

export default PersonController;