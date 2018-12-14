import { combineReducers } from 'redux'

import { default as data } from './data'
import { default as filter } from './filter'
import { default as changes } from './changes'

const reducer = combineReducers({
    data,
    filter,
    changes
});

export default reducer