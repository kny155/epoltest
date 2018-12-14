import FileDownload from "js-file-download";
import axios from "axios";

const parseToJSON = data => data.map(person => (
    {
        id: person.id,
        age: person.age,
        name: `${person.firstname} ${person.lastname}`,
        gender: person.gender,
        company: person.company,
        email: person.email,
        phone: person.phone,
        address: person.address
    }
));

const parseFromJSON = data => data.map(person => (
    {
        id: person.id,
        age: person.age,
        firstname: person.name.split(" ")[0],
        lastname: person.name.split(" ")[1],
        gender: person.gender,
        company: person.company,
        email: person.email,
        phone: person.phone,
        address: person.address
    }
));

export const downloadJSON = person => {
    const importPerson = parseToJSON(person);
    const personJSON = JSON.stringify(importPerson);
    FileDownload(personJSON, 'data.json');
};

export const loadJSON = (e, f) => {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = (e) => {
        const lines = e.target.result;
        const newArr = JSON.parse(lines);
        f(parseFromJSON(newArr));
    };

    reader.readAsText(file);
};

export const saveDB = persons => {
    const savePersons = parseToJSON(persons);

    savePersons.forEach(person => {
        axios.post(`/persons`, person)
            .then(res => {
                console.log(res.data);
            })
    })
};