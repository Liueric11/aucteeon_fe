import React from 'react';
import logo from 'src/assets/logo.png';
import google from 'src/assets/google-logo.png';
import { ActionCreators } from 'src/store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/es/exports';

const loginPage = ({ increment, login, counter }) => {
  const onLogin = () => {
    login();
  };

  console.log(counter, 'counter bro');

  return (
    <div className="flex flex-col items-center">
      <img className="w-52 my-12" src={logo} alt="" />
      <div className="p-8 rounded-3xl border-slate-100 border drop-shadow-md lg:w-2/6">
        <p className="text-2xl font-bold mb-2">Sign In</p>
        <div className="my-4"></div>
        <input
          type="email"
          placeholder="Masukkan Email Anda"
          className="border-b border-slate-300 focus:outline-none py-1 pl-2  border-solid w-full"
        />
        <div className="my-4"></div>
        <input
          type="password"
          placeholder="Masukkan Password Anda"
          className="border-b border-slate-300 focus:outline-none py-1 pl-2  border-solid  w-full"
        />
        <div className="my-4"></div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full my-6"
        >
          Sign In Now
        </button>

        <div className="flex flex-row items-center">
          <div className="flex flex-1 bg-slate-300 h-0.5"></div>
          <p className="px-4 text-sm text-slate-400">or login with</p>
          <div className="flex flex-1 bg-slate-300 h-0.5"></div>
        </div>

        <button
          type="submit"
          className=" font-bold text-gray-500 py-2 px-4 rounded w-full my-6 border border-slate-300"
        >
          <div className="flex flex-row items-center">
            <img width={35} src={google} alt="" />
            <p className="self-center w-full mr-5">Google</p>
          </div>
        </button>
      </div>
    </div>
  );
};

const mapStateProps = ({ contoh, authReducer }) => {
  return {
    counter: contoh.counter,
    user: authReducer.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};
export default connect(mapStateProps, mapDispatchToProps)(loginPage);
