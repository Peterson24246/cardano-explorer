import React from 'react';
import './App.css';
import { useGetLatestEpochQuery } from './features/api/apiSlice';

function App() {
  const latestEpoch = useGetLatestEpochQuery()
  console.log(latestEpoch)
  return (
    <div className="App">
      <h1>Latest Epoch</h1>
    </div>
  );
}

export default App;
