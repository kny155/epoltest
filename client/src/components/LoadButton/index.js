import React from 'react';

import './style.css'

const LoadButton = ({ children, ...arr }) => {
    return (
        <label className="btn btn-primary m-0">
            {children}
            <input
                className="load-button__file"
                type="file"
                {...arr}
            />
        </label>
    );
};

export default LoadButton;

