import Todos from './Components/Todos';
import Goals from './Components/Goals';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Todos />
      <Goals />
    </div>
  );
}

export default App;
