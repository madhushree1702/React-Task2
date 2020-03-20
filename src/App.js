import React from 'react';
import './App.css';
import Table from './Table';

function App() {
  return (
    <div className="Search" align="center">
      <input type="text" placeholder="Search"/>
      <button> Submit </button>
      <br /><br />
      <Table />
    </div>
  )
}

export default App;  
