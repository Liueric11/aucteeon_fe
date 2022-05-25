import React from 'react';
import logo from './logo.svg';
import './App.css';
import _Navbar from './components/Navbar';
import _homepage from './pages/home/homepage';
import AddProductPage from './pages/addProduct/AddProductPage';
import _registerPage from './pages/register/registerPage';
import _loginPage from './pages/login/loginPage';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      {/* <_Navbar /> */}
      <div className="container mx-auto">
        {/* <_homepage /> */}
        {/* <AddProductPage /> */}
        {/* <_registerPage /> */}
        <_loginPage />
      </div>
    </div>
  );
}

export default App;
