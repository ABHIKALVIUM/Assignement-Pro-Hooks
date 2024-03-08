import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

const LARGE_NUMBER = 1000000000;

function App() {
  const [counter, setCounter] = useState(0);
  const [isDarkMode, setDarkMode] = useState(true);
  const [themeName, setThemeName] = useState('dark');
  const [resultList, setResultList] = useState([]);

  const customFunction = useCallback(() => {
    // Different logic: Increment counter by 5 and return an array
    return [counter + 5, counter + 10];
  }, [counter]);

  const longRunningFunction = useMemo(() => {
    console.log('Long Running Function Ran');
    for (let index = 0; index < LARGE_NUMBER; index++) {}
    return counter + 2;
  }, [counter]);

  useEffect(() => {
    console.log('Callback Function was called');
  }, [customFunction]);

  useEffect(() => {
    setThemeName(isDarkMode ? 'DARK' : 'LIGHT');
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleRunCustomFunction = () => {
    setResultList(customFunction);
  };

  const styleTheme = {
    backgroundColor: isDarkMode ? 'orange' : '#ccc7c7',
  };

  return (
    <div className="page" style={styleTheme}>
      <button onClick={handleToggleDarkMode}>{themeName}</button>
      <h1>{counter}</h1>
      <button onClick={handleIncrementCounter}>Change Value</button>
      <button onClick={handleRunCustomFunction}>Show List</button>
      <h2>{longRunningFunction}</h2>
      <div>
        {resultList.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
    </div>
  );
}

export default App;

