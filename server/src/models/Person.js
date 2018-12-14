import mongoose, { Schema } from 'mongoose';

const PersonSchema = new Schema({
    _id: Object,
    age: Number,
    name: String,
    gender: String,
    company: String,
    email: String,
    phone: String,
    address: String
});

const Person = mongoose.model('Person', PersonSchema);

export default Person;