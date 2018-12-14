import React from 'react';

import './style.css';

const TableHeader = ({ name, chooseOrder, itemKey, filter, ...arr }) => (
    <th
        className={`target text-center ${filter.order === itemKey ? filter.reverse
            ? "triangle-up" : "triangle-down"  : ""}`}
        onClick={() => chooseOrder(itemKey)}
        {...arr}
    >{name}</th>
);

export default TableHeader;
