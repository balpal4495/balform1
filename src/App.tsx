import React from 'react';
import './App.css';

function App() {

  const onSubmit = () => {
    console.log('dummy submit');
  }
  
  return (
    <div className="App">
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
