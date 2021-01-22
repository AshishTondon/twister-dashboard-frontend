import React from 'react';
import Routes from './Routes';
import Session from "./state/session/variables";

function App() {
  return (
    <Session>
      <Routes />
    </Session>
    
  );
}

export default App;
