import { connect } from 'react-redux';

import TableRow from '../components/TableRow';
import { changeData, toggleEdit, toggleDelete, toggleInactive, deletePerson, editPerson } from "../actions";



function mapDispatchToProps(dispatch) {
    return {
        onChangeData: (id, text, field) => dispatch(changeData(id, text, field)),
        onChangeEdit: (id, data) => {
            dispatch(toggleEdit(id, data));
            dispatch(toggleInactive(id));
        },
        onChangeDelete: (id, data) => {
            dispatch(toggleDelete(id, data));
            dispatch(toggleInactive(id));
        },
        onDelete: (id) => dispatch(deletePerson(id)),
        onEdit: (id, data) => dispatch(editPerson(id, data))
    }
}

function mapStateToProps(state) {
    return {
        changes: state.changes
    }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(TableRow);

export default MenuContainer;