import React, { useEffect, useState } from 'react';
import logo from 'src/assets/logo.png';
import google from 'src/assets/google-logo.png';
// import { ActionCreators } from 'src/store/actions';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { Authorization } from 'src/api';

const LoginPage = ({ increment, login, counter }) => {
  const history = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const checkAuth = () => {
      if (localStorage.getItem('token')) {
        history('/');
      }
    };
    checkAuth();
  }, [history]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const body = input;
    await Authorization({ history, body });
  };

  return (
    <div className="flex flex-col items-center">
      <img className="w-52 my-12" src={logo} alt="" />
      <div className="p-8 rounded-3xl border-slate-100 border drop-shadow-md lg:w-2/6">
        <p className="text-2xl font-bold mb-2">Sign In</p>
        <div className="my-4"></div>
        <input
          type="email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          placeholder="Masukkan Email Anda"
          className="border-b border-slate-300 focus:outline-none py-1 pl-2  border-solid w-full"
        />
        <div className="my-4"></div>
        <input
          type="password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          placeholder="Masukkan Password Anda"
          className="border-b border-slate-300 focus:outline-none py-1 pl-2  border-solid  w-full"
        />
        <div className="my-4"></div>

        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full my-6"
        >
          Sign In Now
        </button>
      </div>
    </div>
  );
};

// const mapStateProps = ({ contoh, authReducer }) => {
//   return {
//     counter: contoh.counter,
//     user: authReducer.user
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(ActionCreators, dispatch);
// };
export default LoginPage;
