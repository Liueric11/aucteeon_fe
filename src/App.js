import React from 'react';
import './App.css';
// import _Navbar from './components/Navbar';
// import _Footer from './components/Footer';
import DetailPage from './pages/detail/DetailPage';
// import Navbar from './components/Navbar';
import TransactionPage from './pages/transaction/transactionPage';
import Footer from './components/Footer';
import Homepage from './pages/home/homepage';
import AddProductPage from './pages/addProduct/AddProductPage';
import RegisterPage from './pages/register/registerPage';
import LoginPage from './pages/login/loginPage';
import User from './pages/user/User';
// import Carousel from './components/Carousel';
import NotFound from './pages/notFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TransactionDetailPage from './pages/transaction/transactionDetailPage';
import TextEditor from 'src/components/TextEditor';

export default function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen flex justify-between flex-col">
        <div className="container mx-auto">
          <ToastContainer />
          <div className="my-36" />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/transaction-detail/:id" element={<TransactionDetailPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/detail-product/:id" element={<DetailPage />} />
            <Route path="/user" element={<User />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/test" element={<TextEditor />} />
            <Route path="**" element={<NotFound />} />
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
