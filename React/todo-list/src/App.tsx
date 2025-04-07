import React from 'react';
import './App.css';

const App = () => {
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '46.5px',
    fontWeight: 'bold',
    padding: 20,
  };

  return (
    <div className="App">
      <h1 style={style}>Hello, React!!</h1>
    </div>
  );
};

export default App;
