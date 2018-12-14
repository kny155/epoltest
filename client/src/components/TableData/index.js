import React from 'react';

import './style.css';

const TableData = ({ isEdit, children, type="text", itemKey, onChange }) => (
    <td className="p-1">
        <div className="col p-0">
        <input
            className="form-control"
            disabled={!isEdit}
            type={type}
            value={children}
            onChange={(e) => onChange(e.currentTarget.value, itemKey)}
        />
        </div>
    </td>
);

export default TableData;
