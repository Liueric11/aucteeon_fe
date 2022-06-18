import React from 'react';
import logo from './logo.svg';
import './App.css';
import _Navbar from './components/Navbar';
import _Footer from './components/Footer';
import _homepage from './pages/home/homepage';
import _detailPage from './pages/detail/DetailPage';
import AddProductPage from './pages/addProduct/AddProductPage';
import _registerPage from './pages/register/registerPage';
import _loginPage from './pages/login/loginPage';
import Carousel from './components/Carousel';
import _notFound from './pages/notFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen flex justify-between flex-col">
        {/* <_Navbar /> */}
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<_loginPage />} />
            <Route path="/" element={<_homepage />} />
            <Route path="addProduct" element={<AddProductPage />} />
            <Route path="register" element={<_registerPage />} />
            <Route path="login" element={<_loginPage />} />
            <Route path="*" element={<_notFound />} />
          </Routes>
        </div>
        <_Footer />

        {/* <_homepage /> */}
        {/* <AddProductPage /> */}
        {/* <_registerPage /> */}
        {/* <_loginPage /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
