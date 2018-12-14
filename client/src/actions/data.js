import ObjectID from 'bson-objectid'

export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';
export const EDIT_PERSON = 'EDIT_PERSON';
export const LOAD_PERSON = 'LOAD_PERSON';

export function addPerson() {
    return {
        type: ADD_PERSON,
        id: ObjectID().str
    }
}

export function deletePerson(id) {
    return {
        type: DELETE_PERSON,
        id
    }
}

export function editPerson(id, person) {
    return {
        type: EDIT_PERSON,
        id,
        person
    }
}

export function loadPerson(person) {
    return {
        type: LOAD_PERSON,
        person
    }
}