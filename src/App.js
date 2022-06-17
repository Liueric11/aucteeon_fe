import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/home/homepage';
import AddProductPage from './pages/addProduct/AddProductPage';
import RegisterPage from './pages/register/registerPage';
import LoginPage from './pages/login/loginPage';
import User from './pages/user/User';
// import Carousel from './components/Carousel';
import NotFound from './pages/notFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen flex justify-between flex-col">
        {/* <Navbar /> */}
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="add-product" element={<AddProductPage />} />
            <Route path="user" element={<User />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />

        {/* <_homepage /> */}
        {/* <AddProductPage /> */}
        {/* <_registerPage /> */}
        {/* <_loginPage /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
