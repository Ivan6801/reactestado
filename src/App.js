import React from 'react';
import './App.css';
import { UseState } from './components/UseState';
import { Estados } from './components/Estados';

function App() {
  return (
    <div className="App">
      <UseState title="UseState" />
      <Estados title="UseState" />
    </div>
  );
}

export default App;
