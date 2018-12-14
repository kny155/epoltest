import React from 'react';

import './style.css';

const Actions = ({ ok, cancel }) => (
    <div className="btn-group">
        <button className="btn btn-success" onClick={ok}>OK</button>
        <button className="btn btn-danger" onClick={cancel}>Cancel</button>
    </div>
);

export default Actions;
