import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [block, setBlock] = useState('')
  useEffect(()=>{
    console.log('test')
    fetch('https://cardano-explorer-backend.herokuapp.com/api/')
      .then(response => response.json())
      .then(data => console.log(data));
  },[])
  
  return (
    <div className="App">
      <h1>Latest Block</h1>
      <p></p>
    </div>
  );
}

export default App;
