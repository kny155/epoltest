import { connect } from 'react-redux';

import Menu from '../components/Menu';
import { addPerson, loadPerson, downloadJSON, loadJSON, saveDB } from "../actions";



function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(addPerson()),
        onLoad: (person) => dispatch(loadPerson(person)),
        onDownload: person => downloadJSON(person),
        onLoadJSON: (e, f) => loadJSON(e, f),
        onSave: person => saveDB(person)
    }
}

function mapStateToProps(state) {
    return {
        person: state.data
    }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;