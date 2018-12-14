import { ADD_PERSON, DELETE_PERSON, EDIT_PERSON, LOAD_PERSON } from '../actions'
import { keys } from "../properties";



export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_PERSON:
            const person = {
                id: action.id
            };
            keys.map(key => person[key] = "");
            return [...state, person];

        case DELETE_PERSON:
            //return state.filter((item) => item.id !== action.id);
            const index = state.findIndex(person => person.id === action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case EDIT_PERSON:
            return state.map(person => (
                person.id === action.id ? action.person : person
            ));

        case LOAD_PERSON:
            return action.person;

        default:
            return state;
    }
}