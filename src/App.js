import React from 'react';
import './App.css';
import { useGetLatestEpochQuery } from './features/api/apiSlice';

function App() {
  const latestEpoch = useGetLatestEpochQuery()
  return (
    <div className="App">
      <h1>Latest Epoch</h1>
      <p>{latestEpoch.epoch}</p>
    </div>
  );
}

export default App;
