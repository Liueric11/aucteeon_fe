import React from 'react';
import logo from './logo.svg';
import './App.css';
import _Navbar from './components/Navbar';
import _homepage from './pages/homepage/homepage';
import AddProductPage from './pages/homepage/AddProductPage';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      {/* <_Navbar /> */}
      <div className="container mx-auto">
        {/* <_homepage /> */}
        <AddProductPage />
      </div>
    </div>
  );
}

export default App;
