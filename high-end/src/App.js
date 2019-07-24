import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import WebVid from './components/WebVid/WebVid';

function App() {
  return (
    <div className="App">
      <WebVid />
      <NavBar />

    </div>
  );
}

export default App;