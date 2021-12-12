import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [block, setBlock] = useState('')
  useEffect(()=>{
    fetch('https://cardano-explorer-backend.herokuapp.com/api/')
      .then(result => {
        setBlock(result)
        console.log(block)
      })
  },[])
  
  return (
    <div className="App">
      <h1>Latest Block</h1>
      <p></p>
    </div>
  );
}

export default App;
