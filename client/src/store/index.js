import { createStore } from 'redux';

import reducer from '../reducers'

const initialState = {
    data: [],
    filter: {
        text: '',
        order: '',
        reverse: false
    },
    changes: {}
};

const store = createStore(reducer, initialState);

export default store;