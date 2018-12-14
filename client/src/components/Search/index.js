import React from 'react';

import './style.css'

const Search = ({ onChange, filter }) => {
    return (
        <div className="mb-3">
            <input
                className="form-control form-control-lg "
                placeholder="Search"
                value={filter}
                onChange={(e) => onChange(e.currentTarget.value)}
            />
        </div>
    );
};

export default Search;

