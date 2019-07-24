import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import WebVid from './components/WebVid/WebVid';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WebVid />
    </div>
  );
}

export default App;