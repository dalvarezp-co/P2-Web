import React from 'react';
import SpaceGalery from './components/spaceGalery';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <div className = "container mt-4">
      <h1><FormattedMessage id = "MyEspaces"/></h1>
      <SpaceGalery />
    </div>
  );
}

export default App;
