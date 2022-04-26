import React from 'react';
import logo from './logo.svg';
import './App.css';
import _Navbar from './components/Navbar';
import homepage from './pages/homepage/homepage';

function App() {
  return (
    <div>
      <_Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
