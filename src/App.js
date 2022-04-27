import React from 'react';
import logo from './logo.svg';
import './App.css';
import _Navbar from './components/Navbar';
import homepage from './pages/homepage/homepage';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      {/* <_Navbar /> */}
      <div className="container mx-auto">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
