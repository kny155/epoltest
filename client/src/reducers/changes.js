import { CHANGE_DATA, TOGGLE_INACTIVE, TOGGLE_DELETE, TOGGLE_EDIT } from '../actions'



export default function reducer(state = {}, action) {
    switch (action.type) {

        case CHANGE_DATA:

            const data = {
                ...state[action.id].data,
                [action.field]: action.text
            };
            const obj = {
                ...state[action.id],
                data
            };

            return {
                ...state,
                [action.id]: obj
            };


        case TOGGLE_INACTIVE:
            if(state[action.id].isEdit || state[action.id].isDelete)
                return state;

            const newState = {...state};
            delete newState[action.id];

            return newState;

        case TOGGLE_DELETE:
            const personDelete = state[action.id] ?
                {
                    ...state[action.id],
                    isDelete: !state[action.id].isDelete,
                } :
                {
                    data: action.data,
                    isDelete: true,
                    isEdit: false
                };

            return {
                ...state,
                [action.id]: personDelete
            };

        case TOGGLE_EDIT:
            const personEdit = state[action.id] ?
                {
                    ...state[action.id],
                    isEdit: !state[action.id].isEdit,
                } :
                {
                    data: action.data,
                    isDelete: false,
                    isEdit: true
                };

            return {
                ...state,
                [action.id]: personEdit
            };

        default:
            return state;
    }
}