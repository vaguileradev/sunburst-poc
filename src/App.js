import React, { useEffect } from 'react';
import logo from './logo.svg';
import Sunburst from 'sunburst-chart'
import data from './data.json'
import './App.css';

function App() {

  useEffect(() => {
    const myChart = Sunburst();
    myChart.data(data)
    .size('size')
    .color('color')
    (document.getElementById('chart'));
  }, [])

  return (
    <div className="App">
      <div id="chart" />
    </div>
  );
}

export default App;
