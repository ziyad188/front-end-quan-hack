import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const handleButtonClick = () => {
    axios.get('http://127.0.0.1:5002')
      .then(response => {
        console.log(response.data); 
        document.getElementById('response').innerText = response.data; 
      })
      .catch(error => {
        console.error('Error sending request to Flask App 1:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome</h1>
        <button onClick={handleButtonClick}>Send Request</button>
        <h1 id="response"></h1> 
      </header>
    </div>
  );
}

export default App;
