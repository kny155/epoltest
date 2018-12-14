import { connect } from 'react-redux';

import Search from '../components/Search';
import { changeFilter } from "../actions";



function mapStateToProps(state) {
    return {
        text: state.filter.text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (str) => dispatch(changeFilter(str))
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;