import { connect } from 'react-redux';

import Table from '../components/Table';
import { deletePerson, editPerson, chooseOrder} from "../actions";

const filterData = ({ data, filter }) => data.filter((item) => {
    for(const key in item) {
        if(key !== "id"){
            const string = item[key].toString();
            if(string.includes(filter.text))
                return true;
        }
    }
    return false;
});

const sortData = (filterData, filter) => filterData.sort((a, b) => {
    if(filter.reverse) {
        if (a[filter.order] < b[filter.order]) return 1;
        if (a[filter.order] > b[filter.order]) return -1;
    } else {
        if (a[filter.order] > b[filter.order]) return 1;
        if (a[filter.order] < b[filter.order]) return -1;
    }
    return 0;
});


function mapStateToProps(state) {
    const data = sortData(filterData(state), state.filter);
    return {
        data,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deletePerson(id)),
        onEdit: (id, person) => dispatch(editPerson(id, person)),
        chooseOrder: field => dispatch(chooseOrder(field))
    }
}


const TableContainers = connect(mapStateToProps,mapDispatchToProps)(Table);

export default TableContainers;