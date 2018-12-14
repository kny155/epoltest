import { CHANGE_FILTER, CHOOSE_ORDER } from "../actions";

function reducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_FILTER:
            return {
                ...state,
                text: action.text
            };

        case CHOOSE_ORDER:
            return {
                ...state,
                order: action.field,
                reverse: state.order !== action.field ? false : !state.reverse
            };

        default:
            return state;
    }
}

export default reducer;