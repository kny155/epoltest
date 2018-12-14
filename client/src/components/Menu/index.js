import React from 'react';

import LoadButton from "../LoadButton";

import './style.css';

const Menu  = ({ onAdd, onLoad, onLoadJSON, onDownload, onSave, person}) => (
            <section>
                <div className="btn-toolbar justify-content-between" role="toolbar">
                    <div className="btn-group">
                        <LoadButton onChange={(e) => onLoadJSON(e, onLoad)}>Upload</LoadButton>
                        <button className="btn badge-primary" onClick={() => onDownload(person)}>Export</button>
                        <button className="btn badge-primary" onClick={() => onSave(person)}>Submit</button>
                    </div>
                    <div className="btn-group" role="group" aria-label="First group">
                        <button className="btn badge-primary" onClick={() => onLoad([])}>Clear</button>
                        <button className="btn badge-primary" onClick={onAdd}>Add</button>
                    </div>
                </div>
            </section>
);
export default Menu;

