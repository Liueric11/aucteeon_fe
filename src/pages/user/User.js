import React, { useState } from 'react';
import useFetchGetUser from '../../hooks/useFetchGetUser';
import TempProfile from '../../assets/image 26.png';
import { updateUser, getUser } from '../../api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const { user, setUser } = useFetchGetUser();
  const [isEdit, setIsEdit] = useState(false);
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    const body = user;
    updateUser({ body }, (data, err) => {
      if (err) {
        toast(err);
      } else {
        getUser((user, err) => {
          if (err) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            history('/login');
          }
          toast('Update User Success');
          setUser({ ...user });
        });
      }
    });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setUser({ ...user, avatar: base64, newAvatar: base64 });
    setIsEdit(true);
  };

  return (
    <div className="flex justify-center">
      <div className="border-solid border-2 border-slate-200 m-10 rounded-lg min-w-[400px] drop-shadow-sm max-w-[700px]">
        <div className="border-solid border-b-2 border-slate-200 mt-2 pl-2 px-8">
          <p>Biodata</p>
        </div>
        <div className="flex justify-between md:flex-row flex-col px-8">
          <div className="flex justify-center">
            <div className="flex border-solid border-2 border-slate-200 mt-10 mr-3 rounded-b-lg w-fit md:mb-10">
              <div>
                <div className="w-52 h-52 m-3 mx-auto mt-4">
                  <img
                    src={user?.avatar || TempProfile}
                    alt="img-profile"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex justify-center m-3">
                  <input
                    type="file"
                    onChange={uploadImage}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-100 h-100 border-solid  mt-10 ml-10 mb-10">
            <div>
              <p className="font-bold">Edit Biodata</p>
              <div className="flex justify-between items-center content-center mb-3">
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mr-6">
                  Firstname
                </label>
                <div className="mt-1 relative rounded-md shadow-sm ">
                  <input
                    type="text"
                    name="firstname"
                    value={user?.firstname || ''}
                    onChange={(e) => {
                      setUser({ ...user, firstname: e.target.value });
                      setIsEdit(true);
                    }}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center content-center mb-3">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mr-6">
                  Lastname
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="lastname"
                    value={user?.lastname || ''}
                    onChange={(e) => {
                      setUser({ ...user, lastname: e.target.value });
                      setIsEdit(true);
                    }}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center content-center mb-3">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mr-8">
                  Address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="address"
                    value={user?.address || ''}
                    onChange={(e) => {
                      setUser({ ...user, address: e.target.value });
                      setIsEdit(true);
                    }}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center content-center mb-3">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mr-3">
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="phoneNumber"
                    onChange={(e) => {
                      setUser({ ...user, phoneNumber: e.target.value });
                      setIsEdit(true);
                    }}
                    value={user?.phoneNumber || ''}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              {isEdit && (
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full my-6"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
