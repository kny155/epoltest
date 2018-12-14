import React from 'react';

import TableRowContainer from '../../containers/TableRowContainers'
import TableHeader from "../TableHeader";
import { keys, labels } from "../../properties";

import './style.css';

const Table = ({ data, filter, onDelete, chooseOrder, onEdit }) => {

    return data.length ? (
        <table className="table table-borderless">
            <thead className="thead-dark">
                <tr>
                    <th className="text-center" scope="col">#</th>
                    {labels.map((label, i) =>
                        <TableHeader
                            key={label}
                            itemKey={keys[i]}
                            chooseOrder={chooseOrder}
                            name={label}
                            filter={filter}
                            scope="col"
                        />
                    )}
                    <th className="text-center" scope="col">Actions</th>
                </tr>
            </thead>
                <tbody>
                    {data.map((item, i) =>
                        <TableRowContainer
                            key={item.id}
                            number={i + 1}
                            data={item}
                        />
                    )}
                </tbody>
        </table>) :
        <div className="alert alert-primary text-center" role="alert" >Данные отсутствуют!</div>;
};

export default Table;
