import React from 'react';

import TableContainer from "../../containers/TableContainers"
import MenuContainer from "../../containers/MenuContainers"
import SearchContainer from "../../containers/SearchContainer"

import './style.css';

const App = () => (
      <main className="container-fluid py-4">
          <SearchContainer/>
          <TableContainer />
          <MenuContainer/>
      </main>
);

export default App;
