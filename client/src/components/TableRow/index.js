import React, {Component} from 'react';

import TableData from "../TableData";
import { keys } from '../../properties'

import './style.css';
import Actions from "../Actions";

class TableRow extends Component {

    render() {
        const {number, data, onDelete, onEdit, onChangeData, onChangeEdit, onChangeDelete, changes} = this.props;
        const {isEdit=false, isDelete=false, data:changeData=data} = changes[data.id] ? changes[data.id] : {};

        const buttons = !isEdit && !isDelete ?
            <div className="btn-group">
                <button className="btn btn-primary" onClick={() => onChangeEdit(data.id, data)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onChangeDelete(data.id, data)}>Delete</button>
            </div> : isEdit ?
            <Actions
                ok={() => {
                    onChangeEdit(data.id, data);
                    onEdit(data.id, changeData)
                }}
                cancel={() => {
                    onChangeEdit(data.id, data);
                }}
            /> :
            <Actions
                ok={() => {
                    onChangeDelete(data.id, data);
                    onDelete(data.id)
                }}
                cancel={() => onChangeDelete(data.id, data)}
            /> ;


        return (
            <tr>
                <th scope="col" className="align-middle text-center p-1">{number}</th>
                {keys.map((item) =>
                    <TableData
                        key={item}
                        isEdit={isEdit}
                        itemKey={item}
                        onChange={(text, field) => onChangeData(data.id, text, field)}
                    >{changeData[item]}</TableData>
                )}
                <td className="p-1" >{buttons}</td>
            </tr>
        )
    }
}



export default TableRow;
